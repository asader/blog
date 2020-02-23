import React from 'react'
import { LikeButton } from './LikeButton/LikeButton'
import {
  Excerpt,
  Weight,
  ProductDescription,
  ProductTitle,
  CardFooter,
  Currency,
  Price
} from './style'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import {Card} from 'antd';

export const ProductCard = ({
  slug,
  image,
  title,
  regularPrice,
  salePrice,
  weight,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  const price = regularPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
  return (
    <Link to={`/pizza/${slug}`}>
      <Card
        hoverable
        cover={<Img fluid={image.fluid} backgroundColor={'#eeeeee'}/>}
        bodyStyle={{ position: 'relative' }}>
        <LikeButton isLiked={false}/>
        <ProductDescription>
          <ProductTitle>{title}</ProductTitle>
          <Weight>{weight} g</Weight>
        </ProductDescription>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
        <CardFooter>
          <Price>{price}</Price>

        </CardFooter>
      </Card>
    </Link>
  )
};
