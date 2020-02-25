import { Tag  } from 'antd';
import * as React from 'react';
import {SelectedAttributes} from './CategoryTags';

const { CheckableTag } = Tag;

interface Props {
	groupName: string;
	attrName: string;
	selectedAttributes: SelectedAttributes;
	onChange: (groupName: string, attrName: string) => void;
}

export const CategoryTag: React.FunctionComponent<Props> = (props) => {
	const handleChange = (group: string, attribute: string) => {
		props.onChange(group, attribute);
	};

	const { groupName, attrName, selectedAttributes } = props;
	const checked = selectedAttributes[groupName] ? selectedAttributes[groupName][attrName] : false;
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
		}} checked={checked} onChange={() => handleChange(groupName, attrName)}>{attrName}</CheckableTag>
	);
};
