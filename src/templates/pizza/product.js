import React from 'react'
import { graphql } from 'gatsby'
import { Product } from '../../components/Product';

const Pizza = (product) => {
	return Product(product)
};

export default Pizza;

export const query = graphql`
	query ContentfulPizza($slug: String!) {
		contentfulPizza(slug: { eq: $slug }) {
			id
			title
			slug
			metaDescription {
				internal {
					content
				}
			}
			image {
				title
				fluid(maxWidth: 1800) {
					...GatsbyContentfulFluid_withWebp_noBase64
				}
				ogimg: resize(width: 1800) {
					src
					width
					height
				}
			}
			body {
				childMarkdownRemark {
					timeToRead
					html
					excerpt(pruneLength: 320)
				}
			}
			energyValue
			fats
			carbohydrates
			proteins

			regularPrice
			salePrice
			ingredients {
				title
				slug
			}
			weight
		}
	}
`;
