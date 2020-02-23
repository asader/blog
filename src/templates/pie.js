import React from 'react'
import { graphql } from 'gatsby'
import { Product } from '../components/Product';

const Pie = (product) => {
  return Product(product)
};

export default Pie;

export const query = graphql`
  query($slug: String!) {
    contentfulPizza(slug: { eq: $slug }) {
      id
      title
      slug
      category {
        slug
        title
      }
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

      ingredients

      weight
    }
  }
`;