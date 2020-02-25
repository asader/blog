import { Button } from 'antd';
import * as React from 'react';
import {Product} from '../utils/storage';
import {CSSProperties} from 'react';
import {ButtonSize} from 'antd/lib/button';

interface Props {
	onAddToCart: (product: Product) => void;
	quantity: number;
	style?: Partial<CSSProperties>;
	size: ButtonSize;
	isBlock: boolean;
	children: string;
	product: Product;
}

export const AddToCartButton = ({ style, size, isBlock, children, onAddToCart, product }: Props) => {
	return (
		<Button style={style} onClick={() => onAddToCart(product)} size={size} type="primary" block={isBlock}>
			{children}
		</Button>
	);
};
