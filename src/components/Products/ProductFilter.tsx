import { Button, Checkbox, List, InputNumber, Row, Col, Modal } from 'antd';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { filtersByCategory } from './filtersOrder';
import { stringToSlug } from '../../utils';
import {Attributes, SelectedAttributes} from '../Categories/CategoryTags';
import {RootCategory} from '../utils/utils';

interface Props {
	attributes: Attributes;
	rootCategory: RootCategory;
	selectedAttributes: SelectedAttributes;
	onPriceFilter: (minPrice?: number, maxPrice?: number) => void;
	onFilter: (filters: SelectedAttributes) => void;
}

export const ProductFilter: React.FunctionComponent<Props> = (
	{
		rootCategory,
		selectedAttributes,
		onPriceFilter,
		onFilter
	}
) => {
	let minPrice: number | undefined = 0;
	let maxPrice: number | undefined;

	const [isMobile, setMobileMode] = useState(false);
	const [isVisible, setVisibility] = useState(false);

	const updateWindowDimensions = () => {
		setMobileMode(window.innerWidth < 991);
	};

	useEffect(() => {
		updateWindowDimensions();
		window.addEventListener('resize', () => updateWindowDimensions());
		return function cleanup() {
			window.removeEventListener('resize', () => updateWindowDimensions());
		};
	});

	let selectedFilters;

	const radioStyle = {
		display: 'block',
		lineHeight: '30px',
	};

	const filters = Object.values(selectedAttributes).flatMap((filter) => Object.keys(filter));
	const filterByMinPrice = (minimumPrice?: number) => {
		minPrice = minimumPrice;
		onPriceFilter(minPrice, maxPrice);
	};
	const filterByMaxPrice = (maximumPrice?: number) => {
		maxPrice = maximumPrice;
		onPriceFilter(minPrice, maxPrice);
	};

	const onChange = (value: string, filterName: string) => {
		const isChecked = selectedAttributes[filterName] ? selectedAttributes[filterName][value] : false;
		selectedFilters = selectedAttributes || {};
		selectedFilters[filterName] = selectedFilters[filterName] || {};
		if (!isChecked) {
			selectedFilters[filterName][value] = true;
		} else {
			delete selectedFilters[filterName][value];
		}
		if (!Object.keys(selectedFilters[filterName]).length) {
			delete selectedFilters[filterName];
		}
		onFilter(selectedFilters);
	};

	const price = (
		<Row style={{ width: '100%' }} key={0} gutter={16}>
			<Col span={12}>
				<label htmlFor="minPrice">Min price:</label>
				<InputNumber style={{width: '100%'}} id="minPrice" min={0} max={99999999} onChange={filterByMinPrice} />
			</Col>
			<Col span={12}>
				<label htmlFor="maxPrice">Max price:</label>
				<InputNumber style={{width: '100%'}} id="maxPrice" min={0} max={99999999} onChange={filterByMaxPrice} />
			</Col>
		</Row>
	);
	// Object.entries(attributes).map(([name, options], index) => {
	const attributesComponent = filtersByCategory[rootCategory].map(([name, options], index) => {
		if (index === 0) {
			return price;
		}
		const checkbox = (child: string) => (
			<Checkbox
				style={radioStyle}
				key={child}
				checked={filters.includes(child)}
				onChange={() => onChange(child, name)}>
				{child}
			</Checkbox>
		);
		return (
			<List
				key={name}
				className="no-border"
				size="small"
				header={(<b>{name}</b>)}
				bordered={false}
				dataSource={options}
				renderItem={(option) => (
					<List.Item key={option} style={{borderBottom: 'none', padding: 0}}>
						{checkbox(option)}
					</List.Item>
				)}
			/>
		);
	});
	const productFilter = (
		<div>
			<Button style={{marginBottom: 15}} href={stringToSlug(rootCategory)}>Reset filters</Button>
			{attributesComponent}
		</div>
	);
	return (
		<div>
			{ isMobile ? (
				<Col span={24} style={{paddingBottom: 15}}>
					<Button type="primary" onClick={() => setVisibility(true)}>
						Open filters
					</Button>
				</Col>
			) : (
				<Col span={6}>
					{productFilter}
				</Col>
			)}
			<Modal
				title="Filters"
				footer={null}
				visible={isVisible}
				onOk={() => setVisibility(false)}
				onCancel={() => setVisibility(false)}
			>
				{productFilter}
			</Modal>
		</div>
	);
};
