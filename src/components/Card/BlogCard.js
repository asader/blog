import React from 'react'
import { Card, Title, Excerpt, Date, ReadingTime } from './style'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const BlogCard = ({
  slug,
  image,
  title,
  publishDate,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  return (
    <Card featured={props.featured}>
      <Link to={`blog/${slug}/`}>
        <Img fluid={image.fluid} backgroundColor={'#eeeeee'} />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <ReadingTime>{timeToRead} min read</ReadingTime>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Card>
  )
};
