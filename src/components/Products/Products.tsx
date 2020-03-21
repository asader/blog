import { Col, Row } from 'antd';
import { graphql, navigate } from 'gatsby';
import React, { useState } from 'react';

import { Layout } from '../Layout';
import { ProductCard } from '../Card';
import { ProductSort, SORT_ATTRIBUTE, SORT_DIRECTION, SortParams } from './ProductSort';
import { CheckableTagList } from '../CheckableTagList';
import { SEO } from '../SEO';
import { Container } from '../Container';
import { CProductType, CProductСategory } from '../Product/Product';
import { CatalogPageContext } from '../../templates/pizza/catalog';
import {FlexList} from "../../utils/utils";

export interface StoreProps {
	pageContext: CatalogPageContext;
}

export const Products: React.FunctionComponent<StoreProps> = ({pageContext}) => {
	const { productType, categories, types } = pageContext;
	const [products, setProducts] = useState(pageContext.products);
	const [typeSlug, setTypeSlug] = useState(pageContext.typeSlug);
	const [categorySlug, setCategorySlug] = useState(pageContext.categorySlug);
	const { h1, title, description } = {
		h1: 'Pizza',
		title: 'Pizza',
		description: 'Pizza',
	};

	const sortProducts = ({ direction, attr }: SortParams) => {
		const getSortFunction = {
			[SORT_ATTRIBUTE.TITLE]: (a: string, b: string) => a.localeCompare(b),
			[SORT_ATTRIBUTE.PRICE]: (a: string, b: string) => Number(a) - Number(b),
		};
		let sortedProducts;
		if (attr === SORT_ATTRIBUTE.DEFAULT) {
			sortedProducts = products.sort((a, b) => new Date(a.date_modified).getTime() - new Date(b.date_modified).getTime());
		} else {
			sortedProducts = products.sort((a, b) => {
				const sortFunction = getSortFunction[attr];
				// TODO: Fix this
				const first = a[attr.toLowerCase() as 'price' | 'title'];
				const second = b[attr.toLowerCase() as 'price' | 'title'];
				return direction === SORT_DIRECTION.ASC ? sortFunction(first, second) : sortFunction(second, first);
			});
		}
		setProducts([...sortedProducts]);
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
					                  getSlug={(typeSlug) => getSlug(typeSlug, categorySlug)}/>
				</Col>
				<Col span={24}>
					<CheckableTagList entities={categories}
					                  selectedEntitySlug={categorySlug}
					                  getSlug={(categorySlug) => getSlug(typeSlug, categorySlug)}/>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col xs={{ span: 24 }} lg={{ span: 18 }}>
					<ProductSort onSort={sortProducts}/>
					<FlexList gutter={16} dataSource={products} renderItem={(product) => (
						<Col xs={24} sm={12} lg={8} key={product.id} style={{paddingBottom: 16 }}>
							<ProductCard {...product}/>
						</Col>
					)}/>
				</Col>
			</Row>
			</Container>
		</Layout>
	);
};

export const catalogQueryFragment = graphql`
	fragment CatalogQuery on ContentfulPizza {
		title
		id
		slug
		weight
		regularPrice
		salePrice
		image {
			title
			fluid(maxWidth: 1800) {
				aspectRatio
				src
				srcSet
				srcWebp
				srcSetWebp
				sizes
			}
		}
		body {
			childMarkdownRemark {
				timeToRead
				html
				excerpt(pruneLength: 80)
			}
		}
	}
`;
