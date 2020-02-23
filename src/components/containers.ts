import { connect } from 'react-redux';
import { CartItemQuantity } from './Cart/CartItemQuantity';
import { CartItemRemoveButton } from './Cart/CartItemRemoveButton';
import {Product, ProductId} from './utils/storage';
import {addProduct, clearCart, removeProduct, updateProductQuantity} from '../store/actions';
import {AddToCartButton} from './Product/AddToCartButton';
import { OrderForm } from './Forms/OrderForm';

export const TheCartItemQuantity = connect(
	() => ({}),
	(dispatch) => ({
		onQuantityChange: (id: ProductId, quantity: number) => dispatch(updateProductQuantity(id, quantity))
	})
)(CartItemQuantity);

export const TheCartItemRemoveButton = connect(
	() => ({}),
	(dispatch) => ({
		onRemoveProduct: (id: ProductId) => dispatch(removeProduct(id))
	})
)(CartItemRemoveButton);

export const TheAddToCartButton = connect(
	() => ({}),
	(dispatch) => ({
		onAddToCart: (product: Product) => dispatch(addProduct(product))
	})
)(AddToCartButton);

export const TheOrderForm = connect(
	(state) => ({
		products: state.products,
	}),
	(dispatch) => ({
		onOrder: () => dispatch(clearCart())
	})
)(OrderForm);
