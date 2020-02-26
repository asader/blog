import { Tag  } from 'antd';
import * as React from 'react';

const { CheckableTag } = Tag;

interface Props {
	category: string;
	checked: boolean;
	onChange: (category?: string) => void;
}

export const FilterableTag: React.FunctionComponent<Props> = (props) => {

	const { category, checked, onChange } = props;
	return (
		<CheckableTag style={{
			height: 32,
			lineHeight: '30px',
			fontSize: '14px',
			borderRadius: 16,
			border: '1px solid',
			paddingLeft: 12,
			paddingRight: 12,
			cursor: 'pointer',
			marginRight: 10,
			marginTop: 10,
			transition: 'all 0'
		}} checked={checked} onChange={() => onChange(category)}>{category}</CheckableTag>
	);
};
