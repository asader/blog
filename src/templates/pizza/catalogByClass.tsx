import React from 'react'
import { graphql } from 'gatsby'
import { Products } from '../../components/Products';
import { StorePageContext } from './products';

const products = ({ data, pageContext }) => {
	const context: StorePageContext = {
		products: data.allContentfulPizza.nodes,
		selectedCategory: pageContext.selectedCategory,
		categories: pageContext.categories,
		productType: pageContext.productType,
	};
	return (
		<Products pageContext={context}/>
	)
};

export default products;

export const query = graphql`
	query ContentfulPizzaCategory($slug: String!) {
		allContentfulPizza(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
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
`;
