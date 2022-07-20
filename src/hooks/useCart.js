import React from 'react'
import AppContext from '../context';

export const useCart = () => {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const subTotalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

	return {
		cartItems, setCartItems, subTotalPrice

	}
}
