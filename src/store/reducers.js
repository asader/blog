import { ActionType } from '../enum/actionType';

export const product = (state = {}, action= { type: undefined }) => {
    switch (action.type) {
        case ActionType.ADD_PRODUCT:
            return {
                id: action.id,
                slug: action.slug,
                name: action.name,
                image: action.image,
                rootCategory: action.rootCategory,
                price: action.price,
                quantity: action.quantity,
                regularPrice: action.regularPrice,
                salePrice: action.salePrice,
            };
        case ActionType.UPDATE_PRODUCT_QUANTITY:
            return (state.id !== action.id) ?
              state :
              {
                  ...state,
                  quantity: action.quantity
              };
        default :
            return state;
    }
};

export const products = (state = [], action= { type: undefined }) => {
    switch (action.type) {
        case ActionType.ADD_PRODUCT:
            let isProductInCart = false;
            state.map(product => {
                if (product.id === action.id) {
                    isProductInCart = true;
                    product.quantity = product.quantity + action.quantity;
                }
                return product;
            });
            return isProductInCart ? [...state] : [
                ...state,
                product({}, action),
            ];
        case ActionType.UPDATE_PRODUCT_QUANTITY:
            return state.map(
              c => product(c, action)
            );
        case ActionType.REMOVE_PRODUCT:
            return state.filter(
              c => c.id !== action.id,
            );
        case ActionType.CLEAR_CART:
            return [];
        default:
            return state;
    }
};

export const assistantModal = (state= false, action= { type: undefined }) => {
    switch (action.type) {
        case ActionType.TOGGLE_ASSISTANT_MODAL:
            return action.isVisible;
        default:
            return state;
    }
};
