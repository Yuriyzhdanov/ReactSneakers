import React from 'react';
import axios from 'axios';

import btnRemove from "../../img/sneakers_icon/btn-remove.svg"
import arrowRight from "../../img/sneakers_icon/arrow-right.svg"
import btnCartEmpty from "../../img/sneakers_icon/cart-empty.svg"
import iconOrderComplete from "../../img/sneakers_icon/order-complete.svg"

import Info from '../Info/Info';
import styles from "../CartDrawer/CartDrawer.module.scss"

import { useCart } from '../../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CartDrawer({ onClose, onRemove, items = [], opened }) {
	const { cartItems, setCartItems, subTotalPrice } = useCart();//кастомный хук
	const [orderId, setOrderId] = React.useState(null)
	const [isOrderComplete, setIsOrederComplete] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)

	const sale = (subTotalPrice / 100 * 30)

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post("https://62ceaedc826a88972d00ab28.mockapi.io/orders",
				{ items: cartItems, });

			setOrderId(data.id)
			setIsOrederComplete(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete("https://62ceaedc826a88972d00ab28.mockapi.io/cart/" + item.id);
				await delay(1000);
			}
		} catch (error) {
			alert('Failed to create order :(')
		}
		setIsLoading(false);
	};
	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
			<div className={styles.drawer}>
				<h2 className="d-flex justify-between mb-30"> Bag
					<img onClick={onClose} className="cu-p" src={btnRemove} alt="Close" />
				</h2>
				{items.length > 0 ? (
					<div className="d-flex flex-column flex">
						<div className="items flex">
							{items.map((obj) => (
								<div key={obj.id} className="cart-item d-flex align-center mb-20">
									<div
										style={{ backgroundImage: `url(${obj.imageUrl})` }}
										className="cart-item-img"></div>
									<div className="mr-20 flex">
										<p className="mb-5">{obj.title}</p>
										<b>{obj.price} ₴ </b>
									</div>
									<img
										onClick={() => onRemove(obj.id)}
										className="remove-btn"
										src={btnRemove}
										alt="Remove"
									/>
								</div>
							))}
						</div>
						<div className="cart-total-block">
							<ul>
								<li>
									<span>Subtotal:</span>
									<div></div>
									<b>{Math.round(subTotalPrice)} ₴</b>
								</li>
								<li>
									<span>Sale: 30% </span>
									<div></div>
									<b>{Math.round(sale)} ₴</b>
								</li>
								<li>
									<span>Total:</span>
									<div></div>
									<b>{Math.round(subTotalPrice - sale)} ₴</b>
								</li>
							</ul>
							<button disabled={isLoading} onClick={onClickOrder} className="green-button"> Checkout <img className="green-btn" src={arrowRight} alt="arrow" /></button>
						</div></div>
				) : (
					<Info
						title={isOrderComplete ? 'Your order complete!' : 'Cart is empty"'}
						description={
							isOrderComplete
								? `Your order #${orderId} will soon be transferred to the delivery service`
								: 'Add at least one pair of sneakers to place an order.'
						}
						image={isOrderComplete ? iconOrderComplete : btnCartEmpty}
					/>
				)}
			</div>
		</div>
	);
}

export default CartDrawer;