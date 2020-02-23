import { InputNumber } from 'antd';
import * as React from 'react';

import {ProductId} from '../utils/storage';

interface Props {
	id: ProductId;
	quantity: number;
	onQuantityChange: (id: ProductId, quantity: number) => void;
}

export const CartItemQuantity: React.FunctionComponent<Props> = (
	{
		quantity,
		id,
		onQuantityChange,
	},
) => {
	return (
		<InputNumber
			onChange={
				(value) => {
					onQuantityChange(id, value);
				}
			}
			min={1}
			max={999}
			defaultValue={quantity}
		/>
	);
};
