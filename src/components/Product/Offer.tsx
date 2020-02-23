import React from 'react'
import { Price } from '../Card/style';
import { TheAddToCartButton } from '../containers';

export const Offer = ({product}) => {
	return (
		<div style={{marginTop: 20}}>
			<Price style={{display: 'inline-block'}}>{product.price}</Price>
			<TheAddToCartButton style={{ float: 'right' }} product={product}/>
		</div>
	)
};
