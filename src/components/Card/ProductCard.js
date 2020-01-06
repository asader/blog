import React from 'react'
import { Card, Title, Excerpt } from './style'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export const ProductCard = ({
  slug,
  image,
  title,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  return (
    <Card featured={props.featured}>
      <Link to={`/${slug}`}>
        <Img fluid={image.fluid} backgroundColor={'#eeeeee'} />
        <Title>{title}</Title>
        <Excerpt dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.excerpt }}/>
      </Link>
    </Card>
  )
};
