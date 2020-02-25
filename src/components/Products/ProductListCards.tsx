import {Button, Col, Row} from 'antd';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import { Price } from '../Price';
import {RootCategory} from '../utils/utils';
import {Image} from '../utils/storage';
import {Label} from '../../enum/colorByLabel';
import {TheAddToCartButton} from '../containers';
import { CProduct } from '../Product/Product';

interface Props {
	products: CProduct[];
	title: string;
}

export interface CProductCategory {
	name: RootCategory;
	slug: string;
}

export interface CProductYoastMeta {
	yoast_wpseo_title: string;
	yoast_wpseo_metadesc: string;
}

export interface CProductAttribute {
	name: string;
	options: string[];
}

export const ProductListCards: React.FunctionComponent<Props> = ({products, title}) => {
	const rootCategories = Object.values(RootCategory);
	const productView = products.map((product, index) => {
		let image;
		if (product.images && product.images.length) {
			const productImage = product.images[0];
			image = {
				localFile: {
					childImageSharp: {
						fluid: productImage.localFile.childImageSharp.fluid
					}
				},
				alt: productImage.alt,
			};
		}
		const CProductCategory = product.categories.find((cat) => rootCategories.includes(cat.name));
		const categorySlug = CProductCategory ? CProductCategory.slug : undefined;
		const rootCategory: RootCategory = CProductCategory!.name;
		const productData = {
			rootCategory: rootCategory,
			id: product.id,
			image,
			name: product.name,
			price: Number(product.price),
			regularPrice: Number(product.regular_price),
			quantity: 1,
			salePrice: Number(product.sale_price),
			slug: product.slug,
		};
		const fluid = image ? image.localFile.childImageSharp.fluid : undefined;
		const alt = image ? image.alt : undefined;
		return (
			<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} key={index} style={index > 5 ? {paddingTop: 20} : {}}>
				<Link to={`/${categorySlug}/${product.slug}`} className="has-text-primary">
					<Img fluid={fluid} alt={alt}/>
				</Link>
				<div style={{padding: '10px 0', fontWeight: 400 }}>
					<div style={{height: 95}}>
						<p style={{margin: 0, padding: 0, fontSize: 13, color: '#999'}}>{rootCategory}</p>
						<Link to={`/${categorySlug}/${product.slug}`}>
							<b style={{color: '#090909', fontWeight: 600, fontSize: 16}}>{product.name}</b><br/>
							<Price regularPrice={Number(product.regular_price)} salePrice={Number(product.sale_price)}/>
						</Link>
					</div>

					<Row gutter={10}>
						<Col xs={12}>
							<TheAddToCartButton product={productData} quantity={1} size={'small'} isBlock>Buy</TheAddToCartButton>
						</Col>
						<Col xs={12}>
							<Link to={`/${categorySlug}/${product.slug}`}>
								<Button size="small" block>See more</Button>
							</Link>
						</Col>
					</Row>
				</div>
			</Col>
		);
	});
	return (
		<div className="content">
			<h2 className="is-size-3" style={{textAlign: 'center', fontWeight: 'normal'}}>{title}</h2>
			<Row type="flex" gutter={16}>
				{productView}
			</Row>
		</div>
	);
};

export const pageQuery = graphql`
  fragment ProductListCardsFields on ContentfulPizza {
    categories {
			title
        slug
    }
    regularPrice
    salePrice
	  id
		title
    slug
    images {
			alt
			localFile {
				childImageSharp {
					...ImageSharpFluid
				}
			}
    }
  }
`;

export default ProductListCards;
