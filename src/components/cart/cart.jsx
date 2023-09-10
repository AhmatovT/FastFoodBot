import { useState } from 'react';
import Button from '../button/button';
import { totalPrice } from '../units/totalprice';
import './cart.css';

const Cart = ({ cartItem, onCheckout }) => {
	return (
		<div className='cart__container'>
			<p>Umumiy narx: {totalPrice(cartItem).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
			<Button
				title={`${cartItem.length === 0 ? 'Buyurtma berish' : 'To`lov'}`}
				disable={cartItem.length === 0 ? true : false}
				type={'checkout'}
				onClick={onCheckout}
			/>
		</div>
	);
};

export default Cart;
