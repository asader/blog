import { Col, Row } from 'antd';
import React, { useState } from 'react';

import { Layout } from '../Layout';
import { ProductList } from './ProductList';
import { ProductSort } from './ProductSort';
import { CheckableTagList } from '../CheckableTagList';
import { SEO } from '../SEO';
import { Container } from '../Container';
import { CProductType, CProductСategory } from '../Product/Product';
import { CatalogPageContext } from '../../templates/pizza/catalog';

export interface StoreProps {
	pageContext: CatalogPageContext;
}

export const Products: React.FunctionComponent<StoreProps> = ({pageContext}) => {
	const { productType, categories, types } = pageContext;
	const [products] = useState(pageContext.products);
	const [typeSlug, setTypeSlug] = useState(pageContext.typeSlug);
	const [categorySlug, setCategorySlug] = useState(pageContext.categorySlug);
	const { h1, title, description } = {
		h1: 'Pizza',
		title: 'Pizza',
		description: 'Pizza',
	};

	const onTypeChange = (type: CProductType) => {
		setTypeSlug(type.slug);
	};
	const onCategoryChange = (category: CProductСategory) => {
		setCategorySlug(category.slug);
	};

	const getSlug = (typeSlug?: string, categorySlug?: string) => {
		const entitySlug = [];
		if (typeSlug) {
			entitySlug.push(typeSlug);
		}
		if (categorySlug) {
			entitySlug.push(categorySlug);
		}
		return `/${productType}/${entitySlug.join('/')}`;
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
					<CheckableTagList entities={types}
					                  selectedEntitySlug={typeSlug}
					                  getSlug={(typeSlug) => getSlug(typeSlug, categorySlug)}
														onChange={(entity) => onTypeChange(entity)}/>
				</Col>
				<Col span={24}>
					<CheckableTagList entities={categories}
					                  selectedEntitySlug={categorySlug}
					                  getSlug={(categorySlug) => getSlug(typeSlug, categorySlug)}
					                  onChange={(entity) => onCategoryChange(entity)}/>
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
