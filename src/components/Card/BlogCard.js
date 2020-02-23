import { Card, Col } from 'antd';
import React from 'react'
import { Title, Excerpt, StyledCard } from './style'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const { Meta } = Card;

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
		  <Card
			  cover={<Link to={`blog/${slug}`}><Img fluid={image.fluid} backgroundColor={'#eeeeee'}/></Link>}
		  >

			  <Meta
				  title={<Link to={`blog/${slug}`}>{title}</Link>}
				  style={{height: '100%'}}
				  description={(`${timeToRead}  min read`)}
			  />
			  <Excerpt
				  dangerouslySetInnerHTML={{
					  __html: body.childMarkdownRemark.excerpt,
				  }}
			  />

		  </Card>
  )
};
