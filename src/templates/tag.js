import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import { Layout } from '../components/Layout';
import { CardList, BlogCard } from '../components/Card'
import { PageTitle } from '../components/Page';
import { Pagination } from '../components/Pagination'
import { Container } from '../components/Container';

const TagTemplate = ({ data, pageContext }) => {
  const posts = data.contentfulTag.post;

  const { title, slug } = data.contentfulTag;
  const numberOfPosts = posts.length;
  const skip = pageContext.skip;
  const limit = pageContext.limit;
  const currentPage = pageContext.currentPage;
  const isFirstPage = currentPage === 1;

  return (
    <Layout>
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}

      <Container>
        <PageTitle small>
          {numberOfPosts} Posts Tagged: &ldquo;
          {title}
          &rdquo;
        </PageTitle>

        <CardList>
          {posts.slice(skip, limit * currentPage).map(post => (
            <BlogCard {...post} key={post.id} pathPrefix="/blog"/>
          ))}
        </CardList>
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")
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

export default TagTemplate
