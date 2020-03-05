import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import { Layout } from '../components/Layout';
import { HeroImage } from '../components/HeroImage'
import { Container } from '../components/Container';
import { PageBody } from '../components/Page';
import { TagList } from '../components/TagList';
import { PostDetails, PostLinks } from '../components/Post'
import { SEO } from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    image,
    body,
    publishDate,
    tags,
  } = data.contentfulPost;
  const entityNode = data.contentfulPost;

  const previous = pageContext.prev;
  const next = pageContext.next;

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} entityNode={entityNode} postSEO />

      <HeroImage title={title} image={image} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDetails
          date={publishDate}
          timeToRead={body.childMarkdownRemark.timeToRead}
        />
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
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
    }
  }
`;

export default PostTemplate
