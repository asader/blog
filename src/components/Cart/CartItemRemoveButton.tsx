import * as React from 'react';

import { ProductId } from '../utils/storage';

interface Props {
	id: ProductId;
	onRemoveProduct: (id: ProductId) => void;
}

export const CartItemRemoveButton: React.FunctionComponent<Props> = ({ id, onRemoveProduct }) => (
	<div onClick={() => onRemoveProduct(id)}>Remove</div>
);
