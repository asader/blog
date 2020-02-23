import { Row } from 'antd';
import * as React from 'react';

interface Props {
	dataSource: any[];
	renderItem: (entity: any) => React.ReactChild;
	gutter: number;
}

export const FlexList: React.FunctionComponent<Props> = ({ dataSource, renderItem, gutter}) => (
	<Row gutter={gutter} type='flex'>
		{	dataSource.map(entity => renderItem(entity)) }
	</Row>
);
