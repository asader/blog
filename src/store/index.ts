import {createStore, combineReducers, applyMiddleware, Store} from 'redux';
import { products, assistantModal } from './reducers';

type Product = Record<string, any>;

export interface State {
	products: Product[];
	assistantModal: boolean;
}

const console: Console = typeof window !== 'undefined' ? window.console : {} as unknown as Console;

const stateData: State = {
	products: [],
	assistantModal: false
};

const logger = (store) => (next) => (action) => {
	let result;
	console.groupCollapsed('dispatching', action.type);
	console.log('prev state', store.getState());
	console.log('action', action);
	result = next(action);
	console.log('next state', store.getState());
	console.groupEnd();
	return result;
};

const localStorage = typeof window !== 'undefined' ? window.localStorage : {};
const saver = (store: Store) => (next: (o: object) => void) => (action: object) => {
	const result = next(action);
	localStorage['redux-store'] = JSON.stringify(store.getState());
	return result;
};

export const storeFactory = (initialState = stateData) =>
	applyMiddleware(logger, saver)(createStore)(
		combineReducers<State>({products, assistantModal}),
		(localStorage['redux-store']) ?
			JSON.parse(localStorage['redux-store']) :
			initialState
	);
