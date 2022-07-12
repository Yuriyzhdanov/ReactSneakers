import heartUnliked from "../img/sneakers_icon/heart-unliked.svg"
import AirCadence from "../img/sneakers/nike/Air-Cadence.jpeg"
import plus from "../img/Tilda_Icons_3_Store/plus.svg"


function Card() {
	return (
		<div className="card" >
			<div className="favorite">
				<img src={heartUnliked} alt="Unliked" />
			</div>
			<img width={150} height={200} src={AirCadence} alt="Sneakers" />
			<h5>	Men's shoes Jordan-Air-Cadence</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column ">
					<span> Price: </span>
					<b> 2999 ₴</b>
				</div>
				<button className="button">
					<img width={15} height={15} src={plus} />
				</button>
			</div>
		</div>
	);
}

export default Card;



