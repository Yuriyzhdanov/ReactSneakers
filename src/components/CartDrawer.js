import React from 'react';

import btnRemove from "../img/sneakers_icon/btn-remove.svg"
import AirCadence from "../img/sneakers/nike/Air-Cadence.jpeg"
import arrowRight from "../img/sneakers_icon/arrow-right.svg"

function CartDrawer(props) {
	return (
		<div style={{ display: 'none' }} className="overlay">
			<div className="drawer" >
				<h2 className=" d-flex justify-between mb-20 "> Bag <img className="remove-btn" src={btnRemove} alt="Remove" />
				</h2>
				<div className="items">
					<div className="cart-item d-flex align-center mb-20">
						<img className="mr-20" width={100} height={150} src={AirCadence} alt="Sneakers" />
						<div className="cart-item-img"></div>
						<div className="mr-20">
							<p className="mb-5">Men's shoes Jordan-Air-Cadence</p>
							<b>2999 ₴ </b>
						</div>
						<img className="remove-btn" src={btnRemove} alt="Remove" />
					</div>
					<div className="cart-item d-flex align-center">
						<img className="mr-20" width={100} height={150} src={AirCadence} alt="Sneakers" />
						<div className="cart-item-img"></div>
						<div className="mr-20">
							<p className="mb-5">Men's shoes Jordan-Air-Cadence</p>
							<b>2999 ₴ </b>
						</div>
						<img className="remove-btn" src={btnRemove} alt="Remove" />
					</div>
				</div>
				<div className="cart-total-block">
					<ul>
						<li>
							<span>Sale: 30% </span>
							<div></div>
							<b>1230 ₴</b>
						</li>
						<li>
							<span>Total:</span>
							<div></div>
							<b>4070 ₴</b>
						</li>
					</ul>
					<button className="green-button"> Checkout <img className="green-btn" src={arrowRight} alt="arrow" /></button>
				</div>
			</div>
		</div>
	);
}

export default CartDrawer;