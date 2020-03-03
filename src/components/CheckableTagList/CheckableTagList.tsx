import * as React from 'react';
import { TitleWithSlug } from '../Product/Product';
import { Tag } from 'antd';
import { Link } from 'gatsby';
import { ProductType } from '../../utils/utils';

const { CheckableTag } = Tag;

interface Props {
	// TODO Rewrite this
	entities: TitleWithSlug[];
	selectedEntitySlug: string;
	getSlug: (slug: string) => string;
	onChange: (entity: TitleWithSlug) => void;
}
export const CheckableTagList: React.FunctionComponent<Props> = ({ entities, selectedEntitySlug, getSlug, onChange }) => {
	const categories = entities.map((entity) => {
		const { title, slug } = entity;
		return (
			<Link to={getSlug(slug)} onClick={(e) => {
				e.preventDefault();
				onChange(entity);
			}} key={slug}>
				<CheckableTag
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
					checked={slug === selectedEntitySlug}
					key={slug}
				>{title}</CheckableTag>
			</Link>
		);
	});
	return (
		<div style={{marginBottom: 30}}>
			{categories}
		</div>
	);
};
