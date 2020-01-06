import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout';
import { BlogCard, CardList, ProductCard } from '../components/Card'
import Helmet from 'react-helmet'
import { Container } from '../components/Container';
import { SEO } from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges;
  const products = data.allContentfulProduct.edges;
  const featuredPost = posts[0].node;
  const featuredProduct = products[0].node;
  const { currentPage } = pageContext;
  const isFirstPage = currentPage === 1;

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        <CardList>
          <BlogCard {...featuredPost} pathPrefix={'/blog'} featured />
          {posts.slice(1).map(({ node: post }) => (
            <BlogCard key={post.id} pathPrefix={'/blog'} {...post} />
          ))}
        </CardList>

        <CardList>
          <ProductCard {...featuredProduct} featured />
          {products.slice(1).map(({ node: product }) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </CardList>
      </Container>
    </Layout>
  )
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
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
    allContentfulProduct {
      edges {
        node {
          title
          id
          slug
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
  }
`

export default Index
