import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Products } from '../../components/Products';
import { CProduct, CProductСategory } from '../../components/Product/Product';
import { capitalize, ProductType } from '../../utils/utils';

export interface CatalogPageContext {
	products: CProduct[];
	categorySlug: string;
	typeSlug: string;
	categories: CProductСategory[];
	types: CProductСategory[];
	productType: ProductType;
}

const catalog = ({ pageContext: {
	productType,
	categorySlug,
	typeSlug,
	types,
	categories
}}) => {
	const getFilteredQuery= () => {
		if (!categorySlug && !typeSlug) {
			return '';
		}
		let filters = [];
		if (categorySlug) {
			filters.push(`{categories: {elemMatch: {slug: {eq: ${categorySlug}}}`);
		}
		if (typeSlug) {
			filters.push(`{types: {elemMatch: {slug: {eq: ${categorySlug}}}`);
		}
		return `(filter: ${filters.join(', ')})`
		};
	// eslint-disable-next-line no-undef
	const query = `allContentful${capitalize(productType)}${getFilteredQuery()}`;
	const catalogData = useStaticQuery(graphql`
		query {
			allContentfulPizza {
				nodes {
					title
					id
					slug
					weight
					regularPrice
					salePrice
					image {
						title
						fluid(maxWidth: 1800) {
							...GatsbyContentfulFluid_withWebp_noBase64
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
			}
		}
	`);
	const context: CatalogPageContext = {
		products: catalogData.allContentfulPizza.nodes,
		categorySlug,
		typeSlug,
		types,
		categories,
		productType,
	};
	return (
		<Products pageContext={context}/>
	)
};

export default catalog;
