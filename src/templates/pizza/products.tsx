import React from 'react'
import { graphql } from 'gatsby'

import { Products } from '../../components/Products';
import { RootCategory } from '../../components/utils/utils';
import { SelectedAttributes } from '../../components/Products/Categories/CategoryTags';
import { CProduct } from '../../components/Product/Product';

export interface StorePageContext {
	products: CProduct[];
	selectedAttribute: SelectedAttributes;
	rootCategory: RootCategory;
}

const PizzaCategory = ({ data, pageContext }) => {
	const context: StorePageContext = {
		products: data.allContentfulPizza.nodes.map((product) => (product)),
		selectedAttribute: pageContext.selectedAttributes,
		rootCategory: pageContext.rootCategory,
	};
	return (
		<Products pageContext={context}/>
	)
};

export default PizzaCategory;

export const query = graphql`
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
`;
