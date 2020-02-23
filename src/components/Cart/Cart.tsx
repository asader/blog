import { Card, Col, List, Row } from 'antd';

import * as React from 'react';
import { CartItem } from './CartItem';
import {formatCurrency} from '../../utils';
import { Product } from '../utils/storage';
import {TheOrderForm} from '../containers';
import {connect} from 'react-redux';

interface Props {
	products: Product[];
}

interface Total {
	price: number;
	quantity: number;
	regularPrice: number;
	salePrice: number;
}

export const CartTemplate: React.FunctionComponent<Props> = ({ products }) => {
	const total = products.reduce((acc: Total, product: Product) => {
		acc.price = acc.price + product.price * product.quantity;
		acc.quantity = acc.quantity + product.quantity;
		acc.regularPrice = acc.regularPrice + product.regularPrice * product.quantity;
		if (product.salePrice) {
			acc.salePrice = acc.salePrice + (product.salePrice - product.regularPrice)  * product.quantity;
		}
		return acc;
	}, {
		price: 0,
		quantity: 0,
		regularPrice: 0,
		salePrice: 0,
	});

	return (
		<Row gutter={16}>
			<Col xs={{ span: 24 }} lg={{ span: 16 }}>
				<List
					bordered
					rowKey="id"
					dataSource={products}
					renderItem={ (product: Product) => (
						<List.Item style={{padding: '10px'}}>
							<CartItem product={product}/>
						</List.Item>
					)}
				/>
			</Col>
			<Col xs={{ span: 24 }} lg={{ span: 8 }}>
				<Card title={<TheOrderForm/>}
				>
					<div>
						<h3>Your cart</h3>
					</div>
					<div>
						<span>Items ({total.quantity})</span>
						<span style={{float: 'right'}}>{formatCurrency(total.regularPrice)}</span>
					</div>
					<div>
						<span>Sale</span>
						<span style={{float: 'right', color: '#f91155'}}>{formatCurrency(total.salePrice)}</span>
					</div>
					<div>
						<span>Total price <b>{formatCurrency(total.price)}</b></span>
					</div>
				</Card>
			</Col>
		</Row>
	);
};

export const Cart = connect((state) => ({ products: state.products }))(CartTemplate);
