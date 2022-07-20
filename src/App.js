import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import AppContext from "../src/context.js";

import Header from "./components/Header/Header"
import CartDrawer from "./components/CartDrawer/CartDrawer"
import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);


	React.useEffect(() => {
		async function fetchData() {
			try {
				const [itemsResponse, cartResponse, favotitesResponse] = await Promise.all([
					axios.get("https://62ceaedc826a88972d00ab28.mockapi.io/items"),
					axios.get("https://62ceaedc826a88972d00ab28.mockapi.io/cart"),
					axios.get("https://62ceaedc826a88972d00ab28.mockapi.io/favorites"),]);
				setIsLoading(false);
				setCartItems(cartResponse.data)
				setFavorites(favotitesResponse.data)
				setItems(itemsResponse.data)
			} catch (error) {
				alert('error while requesting data (fetch)')
				console.error(error);
			}
		}
		fetchData();
	}, []);
	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
			if (findItem) {
				setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
				await axios.delete(`https://62ceaedc826a88972d00ab28.mockapi.io/cart/${findItem.id}`)
			} else {
				setCartItems((prev) => [...prev, obj]);//подставляем объект не дожидаясь ответа сервака
				const { data } = await axios.post("https://62ceaedc826a88972d00ab28.mockapi.io/cart", obj);//получаем запрос
				setCartItems((prev) => prev.map(item => {//заменияем ответ на актуальный id
					if (item.parentId === data.parentId) {
						return {
							...item,
							id: data.id
						};
					}
					return item
				}));
			}
		} catch (error) {
			alert("failed add to cart");
			console.error(error);
		}
	};
	const onRemoveItem = (id) => {
		try {
			axios.delete(`https://62ceaedc826a88972d00ab28.mockapi.io/cart/${id}`);
			setCartItems((prev) => prev
				.filter(item => Number(item.id) !== Number(id)));
		} catch (error) {
			alert("failed to remove item")
			console.error(error);
		}
	};
	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://62ceaedc826a88972d00ab28.mockapi.io/favorites/${obj.id}`);//удаление 
				//setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
				setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
			} else {
				const { data } = await axios.post('https://62ceaedc826a88972d00ab28.mockapi.io/favorites', obj);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert("failed to add to favorites");
			console.error(error);
		}
	};
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};
	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id));
	};

	return (
		<AppContext.Provider value={{
			items,
			cartItems,
			favorites,
			isItemAdded,
			onAddToFavorite,
			setCartOpened,
			setCartItems,
			onAddToCart
		}}>
			<div className="wrapper clear">
				<CartDrawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
					onRemoveFav={() => setFavorites(false)}
					opened={cartOpened} />

				<Header onClickCart={() => setCartOpened(true)} />
				
				<Routes>
					<Route path='/' element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
							cartItems={cartItems}
							isLoading={isLoading}
						/>}>

					</Route>
				</Routes>
				<Routes>
					<Route path='/favorites' element={
						<Favorites />}>
					</Route>
					<Route path='/orders' element={
						<Orders />}>
					</Route>
				</Routes>
			</div>

		</AppContext.Provider>
	);
}
export default App;
