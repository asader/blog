import { Col, List, Row } from 'antd';
import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout';
import { BlogCard, CardList, ProductCard } from '../components/Card'
import Helmet from 'react-helmet'
import { Container } from '../components/Container';
import { SEO } from '../components/SEO'
import config from '../utils/siteConfig'
import {FlexList} from '../utils/utils';

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges;
  const products = data.allContentfulPizza.edges;
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
        <FlexList gutter={16} dataSource={products} renderItem={({ node: product }) => (
          <Col xs={24} sm={12} lg={8} key={product.id} style={{paddingBottom: 16 }}>
            <ProductCard {...product}/>
          </Col>
        )}/>

        <FlexList gutter={16} dataSource={posts} renderItem={({node}) => (
          <Col xs={24} sm={12} lg={8} key={node.id} style={{paddingBottom: 16 }}>
            <BlogCard {...node}/>
          </Col>
        )}/>
      </Container>
    </Layout>
  )
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      filter: {node_locale: {eq: "en-US"}}
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
    allContentfulPizza(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
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
  }
`

export default Index
