import { List } from 'antd';
import { graphql } from 'gatsby';
import * as React from 'react';
import ProductListItem from './ProductListItem';
import {CProduct} from './ProductListCards';
import { ProductType } from '../../utils/utils';

interface Props {
	products: CProduct[];
	productType: ProductType;
}

export const ProductList: React.FunctionComponent<Props> = ({products, productType}) => (
	<div>
		<List
			itemLayout="vertical"
			size="large"
			dataSource={products}
			rowKey="id"
			renderItem={(product) => (
				<List.Item key={product.id}>
					<ProductListItem product={product} productType={productType}/>
				</List.Item>
			)}
		/>
	</div>
);

export const pageQuery = graphql`
  fragment ProductListFields on ContentfulPizza {
		id
		image {
			alt
			localFile {
				childImageSharp {
					...ImageSharpFluid
				}
			}
		}
		acf {
			product_label
		}
		attributes {
			name
			options
		}
		price
		regular_price
		sale_price
		attributes {
			name
			options
		}
		name
		slug
  }
`;

export default ProductList;
