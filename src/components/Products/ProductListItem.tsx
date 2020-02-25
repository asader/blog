import {Button, Col, Row, Tag} from 'antd';
import {Link, navigate} from 'gatsby';
import * as React from 'react';
import {connect} from 'react-redux';
import Img from 'gatsby-image';

import {Attribute} from '../Attribute';
import {Price} from '../Price';
import {getShortListOfAttributes, RootCategory} from '../utils/utils';
import {stringToSlug} from '../../utils';
import {ActionType} from '../../enum/actionType';
import {ColorByLabel, Label} from '../../enum/colorByLabel';
import {CProduct} from './ProductListCards';

interface Props {
	product: CProduct;
	rootCategory: RootCategory;
	onQuantityChange: (quantity: number) => void;
}

const ProductListItem: React.FunctionComponent<Props> = ({product, rootCategory, onQuantityChange}) => {
	const {
		image,
		salePrice,
		regularPrice,
		slug,
		name,
	} = product;

	const {
		fluid,
		alt,
	} = image;

	const formattedSlug = `/pizza/${slug}`;

	return (
		<Row gutter={16} style={{ width: '100%' }}>
			<Col xs={{ span: 24 }} lg={{ span: 6 }}>
				<Link to={formattedSlug} className="has-text-primary">
					<Img fluid={fluid} alt={alt}/>
				</Link>
			</Col>
			<Col xs={{ span: 24 }} lg={{ span: 10 }}>
				<p style={{margin: 0, padding: 0, fontSize: 13, color: '#999'}}>{rootCategory}</p>
				<Link to={formattedSlug} className="has-text-primary">
					<h3 className="title has-text-weight-bold is-bold-light">{name}</h3>
				</Link>
				<Price regularPrice={Number(regularPrice)} salePrice={Number(salePrice)}></Price>
				<div style={{margin: '10px 0'}}>
					<Button style={{ marginRight: '15px', padding: '0 25px'}} type="primary">
						Buy
					</Button>
					<Button onClick={() => navigate(formattedSlug)}>
						See more
					</Button>
				</div>
			</Col>
			<Col xs={{ span: 24 }} lg={{ span: 8 }}>
			</Col>
		</Row>
	);
};

export default connect(
	() => ({}),
	(dispatch) => ({
		onQuantityChange: (quantity: number) => dispatch({ type: ActionType.SET_TOTAL_QUANTITY, quantity })
	})
)(ProductListItem);
