import { Col, Row } from 'antd';
import * as React from 'react';

import { Layout } from '../Layout';
import { ProductFilter } from './ProductFilter';
import {ProductList} from './ProductList';
import {ProductSort, SORT_ATTRIBUTE, SORT_DIRECTION, SortParams} from './ProductSort';
import {stringToSlug} from '../../utils';
import {CategoryTags, SelectedAttributes} from './Categories/CategoryTags';
import {RootCategory} from '../utils/utils';
import {useState, useEffect} from 'react';
import {SeoTags, seoTagsByRootCategory} from './SEO/getSeoTag';
import { SEO } from '../SEO';
import { Container } from '../Container';
import { CProduct } from '../Product/Product';

export interface StoreProps {
	pageContext: {
		selectedAttribute: SelectedAttributes;
		rootCategory: RootCategory;
		products: CProduct[];
	};
}

export const Products: React.FunctionComponent<StoreProps> = ({pageContext}) => {
	const [products] = useState(pageContext.products);

	const { h1, title, description } = {
		h1: 'Pizza',
		title: 'Pizza',
		description: 'Pizza',
	};
	return (
		<Layout>
			<Container>
			<SEO title={title} description={description} />
			<Row gutter={16} style={{marginBottom: '30px'}}>
				<Col xs={{ span: 24 }} lg={{ span: 12 }}>
					<h1 className="has-text-weight-bold is-size-2">{h1}</h1>
				</Col>
				<Col xs={{ span: 0 }} lg={{ span: 12 }}>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={24}>
					<CategoryTags
						onFilter={(filters) => filterProducts(filters)}
						attributes={materials}
						selectedAttributes={getSelectedAttributes()}/>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col xs={{ span: 24 }} lg={{ span: 18 }}>
					<ProductSort onSort={() => {}}/>
					<ProductList products={products} rootCategory={pageContext.rootCategory}/>
				</Col>
			</Row>
			</Container>
		</Layout>
	);
};
