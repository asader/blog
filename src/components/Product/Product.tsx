import React from 'react'
import Helmet from 'react-helmet'
import config from '../../utils/siteConfig'
import { Layout } from '../Layout';
import { HeroImage } from '../HeroImage'
import { Container } from '../Container';
import { PageBody } from '../Page';
import { TagList } from '../TagList';
import { SEO } from '../SEO'
import { Row, Col, Typography } from 'antd';
import { Composition } from './Composition';
import { EnergyValue } from './EnergyValue';
import { Offer } from './Offer';

export type CProductId = string;

interface TitleWithSlug {
	title: string;
	slug: string;
}

export interface CProduct {
	id: CProductId;
	title: string;
	slug: string;
	updatedAt: string;
	image: any;
	body: any;
	ingredients: TitleWithSlug[];
	categories: TitleWithSlug[];
	regularPrice: number;
	salePrice: number;
	fats: string;
	carbohydrates: string;
	proteins: string;
	energyValue: string;
}
const Title = Typography.Title;
export const Product = ({ data: { contentfulPizza } }) => {
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
	} = contentfulPizza;
	let price = salePrice ? salePrice : regularPrice;
	price = price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
	const ingredientsList = ingredients ? ingredients.map(ingredient => ingredient.title).join(', ') : '';
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
			<SEO pagePath={slug} entityNode={contentfulPizza} postSEO />

			<Container>
				<Row gutter={16}>
					<Col md={12}>
						<HeroImage title={title} image={image} height={'50vh'} />
					</Col>
					<Col md={12}>
						<Title>{title}</Title>
						<PageBody body={body} />
						<Composition composition={ingredientsList}/>
						<EnergyValue energyValue={{ fats, carbohydrates, proteins, energyValue }}/>
						<Offer style={{marginTop: 20}} product={product}/>
					</Col>
				</Row>

			</Container>
		</Layout>
	)
};

