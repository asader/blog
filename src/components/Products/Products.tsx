import { Col, Row } from 'antd';
import { navigate } from 'gatsby'
import React, { useState } from 'react';

import { Layout } from '../Layout';
import { ProductList } from './ProductList';
import { ProductSort } from './ProductSort';
import { CheckableTagList } from '../CheckableTagList';
import { SEO } from '../SEO';
import { Container } from '../Container';
import { CProductСategory } from '../Product/Product';
import { CatalogPageContext } from '../../templates/pizza/catalog';

export interface StoreProps {
	pageContext: CatalogPageContext;
}

export const Products: React.FunctionComponent<StoreProps> = ({pageContext}) => {
	const { categorySlug, productType, categories } = pageContext;
	const [products] = useState(pageContext.products);
	const { h1, title, description } = {
		h1: 'Pizza',
		title: 'Pizza',
		description: 'Pizza',
	};
	const onCategoryChange = (category: CProductСategory) => {
		navigate(`/${productType}/${category.slug}`);
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
					<CheckableTagList entities={categories}
					                  selectedEntity={categorySlug}
					                  onChange={onCategoryChange}/>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col xs={{ span: 24 }} lg={{ span: 18 }}>
					<ProductSort onSort={() => {}}/>
					<ProductList products={products} productType={productType}/>
				</Col>
			</Row>
			</Container>
		</Layout>
	);
};
