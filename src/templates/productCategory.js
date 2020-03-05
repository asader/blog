import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout';
import { CardList, ProductCard } from '../components/Card'
import Helmet from 'react-helmet'
import { Container } from '../components/Container';
import { SEO } from '../components/SEO'
import config from '../utils/siteConfig'
import { PageTitle } from "../components/Page";

const ProductCategory = ({ data, pageContext }) => {
  const product = data.allContentfulProduct.edges;
  const { title, slug } = pageContext;

  return (
    <Layout>
      <Helmet>
        <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
        <meta
          property="og:title"
          content={`Tag: ${title} - ${config.siteTitle}`}
        />
        <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
      </Helmet>
      <SEO/>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <PageTitle small>{title}</PageTitle>
        <CardList>
          {product.length && product.map(({ node }) => (
            <ProductCard {...node} key={node.id}/>
          ))}
        </CardList>
      </Container>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    allContentfulProduct(filter: {category: {slug: {eq: $slug}}}) {
      edges {
        node {
          title
          id
          slug
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
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default ProductCategory
