import plus from "../src/img/Tilda_Icons_3_Store/plus.svg"
import search from "../src/img/Tilda_Icons_3_Store/search.svg"

import AirForce from "../src/img/sneakers/nike/Air-Force.jpeg"
import AirForce1 from "../src/img/sneakers/nike/Air-Force-1.jpeg"
import AirForce2 from "../src/img/sneakers/nike/Air-Force-2.jpeg"

import Card from "./components/Card.js"
import Header from "./components/Header"
import CartDrawer from "./components/CartDrawer"

function App() {
	return (
		<div className="wrapper clear">
			<CartDrawer />
			<Header />
			<div className="content p-40">

				<div className="d-flex align-center mb-40 justify-between">
					<h1>Sneakers catalog </h1>
					<div className="search-block">
						<img width={15} height={15} src={search} alt="Search" />
						<input placeholder="Search..." />
					</div>
				</div>
				
				<div className="d-flex">
					<Card />
					<div className="card" >
						<img width={150} height={200} src={AirForce} alt="Sneakers" />
						<h5 >
							Men's shoes Nike-Air-Force-1-LV4</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span> Цена: </span>
								<b> 2999 ₴</b>
							</div>
							<button className="button">
								<img width={15} height={15} src={plus} />
							</button>
						</div>
					</div>

					<div className="card" >
						<img width={150} height={200} src={AirForce1} alt="Sneakers" />
						<h5>
							Men's shoes Nike-Air-Force-1-LV8</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span> Цена: </span>
								<b> 2999 ₴</b>
							</div>
							<button className="button">
								<img width={15} height={15} src={plus} />
							</button>
						</div>
					</div>

					<div className="card" >
						<img width={150} height={200} src={AirForce2} alt="Sneakers" />
						<h5>
							Men's shoes Nike-Air-Force-1-07-ESS</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span> Цена: </span>
								<b> 2999 ₴</b>
							</div>
							<button className="button">
								<img width={15} height={15} src={plus} />
							</button>
						</div>
					</div>


				</div>
			</div>
		</div>
	);
}

export default App;
