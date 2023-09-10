import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/card';
import Cart from './components/cart/cart';
import { getData } from './constants/db';

const courses = getData();
const telegram = window.Telegram.WebApp;

const App = () => {
	const [cartItem, setCartItem] = useState([]);

	useEffect(() => {
		telegram.ready();
	});

	const onAddItem = item => {
		const existItem = cartItem.find(c => c.id == item.id);
		if (existItem) {
			const newDate = cartItem.map(c => (c.id == item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c));
			setCartItem(newDate);
		} else {
			const newDate = [...cartItem, { ...item, quantity: 1 }];
			setCartItem(newDate);
		}
	};

	const onRemoveItem = item => {
		const existItem = cartItem.find(c => c.id === item.id);
		if (existItem.quantity === 1) {
			const newDate = cartItem.filter(c => c.id !== existItem.id);
			setCartItem(newDate);
		} else {
			const newDate = cartItem.map(c => (c.id === existItem.id ? { ...existItem, quantity: existItem.quantity - 1 } : c));
			setCartItem(newDate);
		}
	};

	const onCheckout = () => {
		telegram.MainButton.text = 'Sotib olish :)';
		telegram.MainButton.show();
	};

	return (
		<>
			<h1 className='heading'>Bootcamp Kurslar</h1>
			<Cart cartItem={cartItem} onCheckout={onCheckout} />
			<div className='cards__container'>
				{courses.map(course => (
					<>
						<Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
					</>
				))}
			</div>
		</>
	);
};

export default App;
