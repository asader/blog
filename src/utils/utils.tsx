import { Row } from 'antd';
import * as React from 'react';

interface Props {
	dataSource: any[];
	renderItem: (entity: any) => React.ReactChild;
	gutter: number;
}

export interface RootCategoryInfo {
	endPoint: string;
	fileName: string;
}

export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export enum ProductType {
	PIZZA = 'pizza',
	PIE = 'pie',
}

export const FlexList: React.FunctionComponent<Props> = ({ dataSource, renderItem, gutter}) => (
	<Row gutter={gutter} type='flex'>
		{	dataSource.map(entity => renderItem(entity)) }
	</Row>
);

