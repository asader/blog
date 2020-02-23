import React from 'react'
import { graphql } from 'gatsby'
import { Product } from '../components/Product';

const PizzaCategory = (product) => {
  return (
    <p>test</p>
  )
};

export default PizzaCategory;

export const query = graphql`
  query($slug: String!) {
    contentfulPizzaCategory(slug: { eq: $slug }) {
      id
      title
      slug
      pizza {
        slug
        title
      }
    }
  }
`;
