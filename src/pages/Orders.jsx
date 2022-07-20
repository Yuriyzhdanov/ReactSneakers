import axios from 'axios';
import React from 'react';

import Card from '../components/Card/Card';
import AppContext from '../context';

function Orders() {
	const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
	const [isLoading, setIsLoading] = React.useState(true)
	const [orders, setOrders] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get("https://62ceaedc826a88972d00ab28.mockapi.io/orders");
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);
			} catch (error) {
				alert('order request error')
			}
		})();
	}, []);

	return (
		<div className="content p-40">
			<div className="d-flex align-center mb-40 justify-between">
				<h1> My orders</h1>
			</div>
			<div className="d-flex flex-wrap">
				{(isLoading ? [...Array(8)] : orders).map((item, index) => (
					<Card key={index} loading={isLoading} {...item} />
				))}
			</div>
		</div>
	);
}

export default Orders;