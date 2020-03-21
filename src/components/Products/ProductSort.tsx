import { Radio } from 'antd';
import * as React from 'react';
import {useState} from 'react';

export enum SORT_DIRECTION {
	ASC = 'Asc',
	DESC = 'Desc',
}

export enum SORT_ATTRIBUTE {
	PRICE = 'Price',
	TITLE = 'Title',
	DEFAULT = 'Default',
}

interface Prop {
	onSort: (sortParams: SortParams) => void;
}

export interface SortParams {
	attr: SORT_ATTRIBUTE;
	direction: SORT_DIRECTION;
}

export const ProductSort: React.FunctionComponent<Prop> = ({onSort}) => {
	const [attr, setAttr] = useState(SORT_ATTRIBUTE.DEFAULT);
	const [direction, setDirection] = useState(SORT_DIRECTION.DESC);

	const onDirectionChange = (dir: SORT_DIRECTION) => {
		setDirection(dir);
		onSort({ attr, direction: dir });
	};

	const onAttributeChange = (attribute: SORT_ATTRIBUTE) => {
		setAttr(attribute);
		onSort({ attr: attribute, direction });
	};

	return (
		<div style={{marginBottom: 16}}>
			<span style={{marginRight: '10px'}}>Sort by</span>
			<Radio.Group
				style={{marginRight: '15px'}}
				defaultValue={SORT_ATTRIBUTE.DEFAULT}
				value={attr}
				onChange={(e) => onAttributeChange(e.target.value)}
			>
				{Object.values(SORT_ATTRIBUTE).map((sortAttribute) => (
					<Radio.Button key={sortAttribute} value={sortAttribute}>{sortAttribute}</Radio.Button>
				))}
			</Radio.Group>

			{
				attr !== SORT_ATTRIBUTE.DEFAULT && (
					<Radio.Group
						defaultValue={SORT_DIRECTION.DESC}
						onChange={(e) => onDirectionChange(e.target.value)}
						value={direction}
					>
						{Object.values(SORT_DIRECTION).map((sortDirection) => (
							<Radio.Button key={sortDirection} value={sortDirection}>{sortDirection}</Radio.Button>
						))}
					</Radio.Group>
				)
			}
		</div>
	);
};

export default ProductSort;
