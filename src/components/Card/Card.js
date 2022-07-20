import React from "react";
import ContentLoader from "react-content-loader"

import styles from "../Card/Card.module.scss"
import AppContext from '../../context';

import btnUnliked from "../../img/sneakers_icon/heart-unliked.svg"
import btnLiked from "../../img/sneakers_icon/heart-liked.svg"
import btnPlus from "../../img/sneakers_icon/add_plus.svg"
import btnChecked from "../../img/sneakers_icon/btn-checked.svg"

function Card({
	id,
	title,
	imageUrl,
	price,
	onFavorite,
	onPlus,
	favorited = false,
	loading = false,
}) {

	const { isItemAdded } = React.useContext(AppContext);
	const [isFavorite, setIsFavotire] = React.useState(favorited);
	const obj = { id, parentId: id, title, imageUrl, price };

	const onClickPlus = () => {
		onPlus(obj);
	};

	const onClickFavorite = () => {
		onFavorite(obj);
		setIsFavotire(!isFavorite);
	};

	return (
		<div className={styles.card} >
			{loading ?
				(<ContentLoader
					speed={2}
					width={200}
					height={265}
					viewBox="0 0 200 265"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="0" y="4" rx="10" ry="10" width="160" height="155" />
					<rect x="0" y="233" rx="6" ry="6" width="70" height="30" />
					<rect x="0" y="203" rx="6" ry="6" width="90" height="15" />
					<rect x="0" y="176" rx="6" ry="6" width="160" height="15" />
					<rect x="125" y="233" rx="6" ry="6" width="32" height="30" />
				</ContentLoader>
				) : (
					<>
						{onFavorite && (<div className="favorite">
							<img className={styles.liked} onClick={onClickFavorite}
								src={isFavorite ? btnLiked : btnUnliked}
								alt="Unliked" />
						</div>)}
						<img width={150} height={150} src={imageUrl} alt="SneakersImg" />
						<h5 className="d-flex justify-between align-center">{title}</h5>
						<div className="d-flex justify-between align-center">

							<div className="d-flex flex-column ">
								<span> Price: </span>
								<b>{price} ₴</b>
							</div>
							<img className={styles.plus}
								onClick={onClickPlus}
								src={isItemAdded(id) ? btnChecked : btnPlus}
								alt="Plus"
							/>
						</div>
					</>
				)}
		</div>
	);
}


export default Card;
