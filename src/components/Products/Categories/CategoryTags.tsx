import * as React from 'react';
import { TitleWithSlug } from '../../Product/Product';
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
