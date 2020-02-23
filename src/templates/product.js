import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import { Layout } from '../components/Layout';
import { HeroImage } from '../components/HeroImage'
import { Container } from '../components/Container';
import { PageBody } from '../components/Page';
import { TagList } from '../components/TagList';
import { SEO } from '../components/SEO'
import { Row, Col, Typography } from 'antd';
import { Composition, EnergyValue } from '../components/Product';
import {Offer} from '../components/Product/Offer';

const { Title } = Typography;

const ProductTemplate = ({ data }) => {
  const {
    id,
    title,
    slug,
    image,
    body,
    tags,
    ingredients,
    regularPrice,
    salePrice,
    fats,
    carbohydrates,
    proteins,
    energyValue
  } = data.contentfulProduct;
  const productNode = data.contentfulProduct;
  const price = regularPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

  const product = {
    id,
    title,
    slug,
    image,
    regularPrice,
    price,
    rootCategory: 'pizza',
    quantity: 1,
  };
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} entityNode={productNode} postSEO />

      <Container>
        <Row gutter={16}>
          <Col md={12}>
            <HeroImage title={title} image={image} height={'50vh'} />
          </Col>
          <Col md={12}>
            <Title>{title}</Title>
            {tags && <TagList tags={tags} />}
            <PageBody body={body} />
            <Composition composition={composition}/>
            <EnergyValue energyValue={{ fats, carbohydrates, proteins, energyValue }}/>
            <Offer style={{marginTop: 20}} product={product}/>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
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
      energyValue
      fats
      carbohydrates
      proteins

      regularPrice
      salePrice

      composition { composition }

      weight
    }
  }
`;

export default ProductTemplate
