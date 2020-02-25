import { List } from 'antd';
import { graphql } from 'gatsby';
import * as React from 'react';
import ProductListItem from './ProductListItem';
import {CProduct} from './ProductListCards';
import {RootCategory} from '../utils/utils';

interface Props {
	products: CProduct[];
	rootCategory: RootCategory;
}

export const ProductList: React.FunctionComponent<Props> = ({products, rootCategory}) => (
	<div>
		<List
			itemLayout="vertical"
			size="large"
			dataSource={products}
			rowKey="id"
			renderItem={(product) => (
				<List.Item key={product.id}>
					<ProductListItem product={product} rootCategory={rootCategory}/>
				</List.Item>
			)}
		/>
	</div>
);

export const pageQuery = graphql`
  fragment ProductListFields on ContentfulPizza {
		id
		images {
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
