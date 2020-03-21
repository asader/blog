import React from 'react'
import { graphql } from 'gatsby'
import { getCatalogPage } from '../../components/utils/utils';

const catalog = getCatalogPage('allContentfulPizza');

export default catalog;

export const query = graphql`
	query ContentfulPizzaCatalogByType($typeSlug: String!) {
		allContentfulPizza(
			filter: {
				node_locale: {eq: "en-US"},
				types: {elemMatch: {slug: {eq: $typeSlug}}}
			}) {
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
