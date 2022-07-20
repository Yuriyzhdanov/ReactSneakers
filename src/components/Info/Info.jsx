import React from 'react'

import AppContext from '../../context';

import arrowRight from "../../img/sneakers_icon/arrow-right.svg"

const Info = ({ title, image, description }) => {
	const { setCartOpened } = React.useContext(AppContext);

	return (
		<div className="cart-empty d-flex align-center justify-center flex-column flex ">
			<img className="mb-20" width="100px" src={image} alt="cartEmpty" />
			<h2>{title}</h2>
			<p className="opacity -6">{description}</p>
			<button onClick={() => setCartOpened(false)} className="green-button" >
				<img src={arrowRight} alt="Arrow" /> 
				Come back
			</button>
		</div>
	)
};

export default Info;