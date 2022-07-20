import React from 'react';
import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart';

import sneakersLogo from "../../img/sneakers copy.png"
import cart from "../../img/sneakers_icon/cart.svg"
import union from "../../img/sneakers_icon/union.svg"
import heartfav from "../../img/sneakers_icon/favorite-outline 1.svg"

function Header(props) {
	const { subTotalPrice } = useCart();

	return (
		<header className="d-flex justify-between align-center p-40">
			<Link to="/">
				<div className="d-flex align-center ">
					<img width={100} height={100} src={sneakersLogo} alt="LogoSneakers" />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5"> Store of original sneakers </p>
					</div>
				</div>
			</Link>
			<ul className="d-flex">
				<li onClick={props.onClickCart} className="mr-30 cu-p">
					<img width={20} height={20} src={cart} alt="Cart" />
					<span> {subTotalPrice} ₴</span>
				</li>
				<li>
					<Link to="/favorites "><img className="mr-20 cu-p" width={20} height={20} src={heartfav} alt="Favotite" /></Link>
				</li>
				<li>
					<Link to="/orders "><img className="mr-20 cu-p" width={20} height={20} src={union} alt="User" /></Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;

