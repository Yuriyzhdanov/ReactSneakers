import React from 'react';

import search from "../img/sneakers_icon/search.svg"
import btnRemove from "../img/sneakers_icon/btn-remove.svg"

import Card from "../components/Card/Card.js";

function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart,
	isLoading,
}) {

	const renderItems = () => {
		const filtredItems = items.filter((item) =>
			item.title.toLowerCase().includes(searchValue.toLowerCase()));
		return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
			<Card
				key={index}
				onFavorite={(obj) => onAddToFavorite(obj)}
				onPlus={(obj) => onAddToCart(obj)}
				loading={isLoading}
				{...item}
			/>
		))
	}

	return (
		<div className="content p-40">
			<div className="d-flex align-center mb-40 justify-between">
				<h1>{searchValue ? `Search : ${searchValue}` : "All sneakers"} </h1>
				<div className="search-block ">

					<img width={15} height={15} src={search} alt="Search" />
					{searchValue
						&& <img onClick={() => setSearchValue('')}
							className="clear cu-p" src={btnRemove} alt="Clear" />}

					<input onChange={onChangeSearchInput}
						value={searchValue}
						placeholder="Search..." />
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{renderItems()}
			</div>
		</div>
	);
}

export default Home;
