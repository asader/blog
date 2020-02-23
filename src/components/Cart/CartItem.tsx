import { Col, Row } from 'antd';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import { Price } from '../Price';
import {Product} from '../utils/storage';
import {stringToSlug} from '../../utils';
import {TheCartItemQuantity, TheCartItemRemoveButton} from '../containers';

interface Props {
	product: Product;
}

export const CartItem: React.FunctionComponent<Props> = (
	{
		product: {
			title,
			slug,
			rootCategory,
			quantity,
			image,
			id,
			salePrice,
			regularPrice,
		},
	},
) => {
	const alt = image ? image.alt : undefined;
	const fluid = image ? image.fluid : undefined;

	const categorySlug = stringToSlug(rootCategory);
	return (
		<Row gutter={8} style={{width: '100%'}}>
			<Col xs={0} lg={{ span: 5 }} >
				<Link to={`${categorySlug}/${slug}`}>
					<Img fluid={fluid} alt={alt} style={{ borderRadius: '6px' }}/>
				</Link>
			</Col>
			<Col xs={16} lg={{ span: 11 }}>
				<Link to={`${categorySlug}/${slug}`}>
					<span className="label">{title}</span>
				</Link>
				<div style={{paddingBottom: '15px'}}>
					<TheCartItemRemoveButton id={id}/>
				</div>
			</Col>
			<Col xs={8} lg={{ span: 4 }}>
				<Price salePrice={salePrice} regularPrice={regularPrice} quantity={quantity}/>
			</Col>
			<Col xs={{ span: 24 }} lg={{ span: 4 }}>
				<div style={{ paddingBottom: '15px' }}>
					<TheCartItemQuantity id={id} quantity={quantity}/>
					{quantity > 1 && <div><span style={{ color: 'grey' }}>{regularPrice}/unit</span></div>}
				</div>
			</Col>
		</Row>
	);
};
