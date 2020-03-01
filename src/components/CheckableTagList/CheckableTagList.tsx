import * as React from 'react';
import { TitleWithSlug } from '../Product/Product';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

interface Props {
	// TODO Rewrite this
	entities: TitleWithSlug[];
	selectedEntity: string;
	onChange: (entity: TitleWithSlug) => void
}
export const CheckableTagList: React.FunctionComponent<Props> = ({ entities, selectedEntity, onChange }) => {
	const categories = entities.map((category) => {
		const { title, slug } = category;
		return <CheckableTag
			style={{
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
			}}
			checked={title === selectedEntity}
			key={slug}
			onChange={() => onChange(category)}
		>{title}</CheckableTag>
	});
	return (
		<div style={{marginBottom: 30}}>
			{categories}
		</div>
	);
};
