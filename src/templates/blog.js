import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout';
import { BlogCard, CardList } from '../components/Card'
import Helmet from 'react-helmet'
import { Container } from '../components/Container';
import { Pagination } from '../components/Pagination'
import { SEO } from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges;
  const featuredPost = posts[0].node;
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
        {isFirstPage ? (
          <CardList>
            <BlogCard {...featuredPost} featured/>
            {posts.slice(1).map(({ node: post }) => (
              <BlogCard key={post.id} {...post}/>
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <BlogCard key={post.id} {...post}/>
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
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
