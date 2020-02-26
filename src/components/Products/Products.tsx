import { Col, Row } from 'antd';
import { graphql, navigate, useStaticQuery } from 'gatsby'
import React, { useState } from 'react';

import { Layout } from '../Layout';
import { ProductList } from './ProductList';
import { ProductSort } from './ProductSort';
import { CheckableTagList } from './Categories/CategoryTags';
import { SEO } from '../SEO';
import { Container } from '../Container';
import { CProduct, CProductСategory } from '../Product/Product';

export interface StoreProps {
	pageContext: {
		categories: CProductСategory[];
		selectedCategory?: string;
		products: CProduct[];
	};
}


export const Products: React.FunctionComponent<StoreProps> = ({pageContext}) => {
	const categoriesData = useStaticQuery(graphql`
		query {
			allContentfulPizzaCategory {
				nodes {
					slug
					title
				}
			}
		}
	`);

	const categories = categoriesData.allContentfulPizzaCategory.nodes;
	const { selectedCategory } = pageContext;
	const [products] = useState(pageContext.products);
	const { h1, title, description } = {
		h1: 'Pizza',
		title: 'Pizza',
		description: 'Pizza',
	};
	const onCategoryChange = (category: CProductСategory) => {
		navigate(`/${category.slug}`);
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
					                  selectedEntity={selectedCategory}
					                  onChange={onCategoryChange}/>
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
