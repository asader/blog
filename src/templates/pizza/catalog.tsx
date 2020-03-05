import React from 'react'
import { graphql } from 'gatsby'

import { getCatalogPage } from '../../components/utils/utils';

const catalog = getCatalogPage('allContentfulPizza');

export const query = graphql`
	query ContentfulPizzaCatalog {
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
		}
	}
`;


export default catalog;
