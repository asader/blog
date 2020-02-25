import * as React from 'react';
import {CategoryTag} from './CategoryTag';

// TODO Rename it
export type Attributes = Record<string, string[]>;
// TODO Rename it
export type SelectedAttributes = Record<string, Record<string, boolean>>;
interface Props {
	// TODO Rewrite this
	attributes: Attributes;
	selectedAttributes: SelectedAttributes;
	onFilter: (filters: SelectedAttributes) => void;
}
export const CategoryTags: React.FunctionComponent<Props> = ({ attributes, selectedAttributes, onFilter }) => {

	const onChange = (groupName: string, attrName: string) => {
		const isChecked = selectedAttributes[groupName] ? selectedAttributes[groupName][attrName] : false;
		const filters = selectedAttributes || {};
		filters[groupName] = filters[groupName] || {};
		if (!isChecked) {
			filters[groupName][attrName] = true;
		} else {
			delete filters[groupName][attrName];
		}
		if (!Object.keys(filters[groupName]).length) {
			delete filters[groupName];
		}
		onFilter(filters);
	};
	const tags = Object.entries(attributes).map(([name, options]) => options.map((attrName) => <CategoryTag onChange={onChange} key={attrName} groupName={name} attrName={attrName} selectedAttributes={selectedAttributes}/>));

	return (
		<div style={{marginBottom: 30}}>
			{tags}
		</div>
	);
};
