import { Badge, Icon } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from 'gatsby';

const CartIconTemplate: React.FunctionComponent<{quantity?: number}> = ({quantity}) => (
	<Link to={'/cart'}>
		<Badge count={quantity}>
				<Icon style={{ fontSize: '20px', color: '#fff' }} type="shopping-cart" />
		</Badge>
	</Link>
);

export const CartIcon = connect((state) => {
	let quantity = 0;
	state.products.forEach((product) => {
		quantity += product.quantity;
	});
	return ({
		quantity,
	});
})(CartIconTemplate);
