import React from 'react'
import { Button } from 'antd';
import { Price } from '../Card/style';

export const AddToCartButton = ({onAddToCart, product}) => {
	return (
		<Button onClick={() => onAddToCart(product)}>Add to card</Button>
	)
};
