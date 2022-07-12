import React from 'react';

import SneakersLogo from "../img/sneakers.png"

import cart from "../img/sneakers_icon/cart.svg"
import union from "../img/sneakers_icon/union.svg"


function Header() {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center ">
				<img width={50} height={50} src={SneakersLogo} />
				<div>
					<h3 className="text-uppercase">React Sneakers</h3>
					<p className="opacity-5"> Store of original sneakers </p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30">
					<img width={20} height={20} src={cart} />
					<span>2999 ₴</span>
				</li>
				<li>
					<img width={20} height={20} src={union} />
				</li>
			</ul>
		</header>
	);
}

export default Header;

