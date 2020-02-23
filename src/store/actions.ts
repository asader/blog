import {ActionType} from '../enum/actionType';
import {Product, ProductId} from '../components/utils/storage';

export const addProduct = (product: Product) =>
	({
		type: ActionType.ADD_PRODUCT,
		...product
	});

export const removeProduct = (id: ProductId) =>
	({
		type: ActionType.REMOVE_PRODUCT,
		id
	});

export const updateProductQuantity = (id: ProductId, quantity: number) =>
	({
		type: ActionType.UPDATE_PRODUCT_QUANTITY,
		id,
		quantity
	});

export const clearCart = () =>
	({
		type: ActionType.CLEAR_CART,
	});

export const toggleAssistantModal = (isVisible = false) =>
	({
		type: ActionType.TOGGLE_ASSISTANT_MODAL,
		isVisible
	});
