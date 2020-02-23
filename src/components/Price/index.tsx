import * as React from 'react';
import { formatCurrency } from '../../utils';

interface Props {
	salePrice: number;
	regularPrice: number;
	quantity?: number;
}

export const Price: React.FunctionComponent<Props> = ({ salePrice, regularPrice, quantity = 1 }) => {
	if (salePrice) {
		return (
			<div>
				<div style={{marginBottom: 0}} className="label">{formatCurrency(salePrice * quantity)}</div>
				<span style={{color: '#e63d33', display: 'inline-block'}}>Discount {formatCurrency((regularPrice - salePrice) * quantity)}</span>
				<del style={{ color: '#a3a3a3', marginRight: '10px'}}>{formatCurrency(regularPrice * quantity)}</del>
			</div>
		);
	}
	return (
		<div>
			<div style={{color: '#e63d33'}} className="label">{formatCurrency(regularPrice * quantity)}</div>
		</div>
	);
};
