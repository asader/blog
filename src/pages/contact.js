import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { PageTitle } from '../components/Page';
import { ContactForm } from '../components/ContactForm'
import { SEO } from '../components/SEO'

const Contact = ({ data }) => {
  const entityNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO entityNode={entityNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
