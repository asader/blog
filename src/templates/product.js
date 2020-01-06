import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import SEO from '../components/SEO'

const ProductTemplate = ({ data }) => {
  const {
    title,
    slug,
    image,
    body,
    tags,
  } = data.contentfulProduct;
  const productNode = data.contentfulProduct;

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} entityNode={productNode} postSEO />

      <Hero title={title} image={image} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PageBody body={body} />
      </Container>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
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
    }
  }
`;

export default ProductTemplate
