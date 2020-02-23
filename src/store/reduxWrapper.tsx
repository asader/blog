import React, {ReactChild} from 'react';
import { Provider } from 'react-redux';
import { storeFactory } from '.';

const store = storeFactory();

export interface Child {
	element: ReactChild | ReactChild[];
}

export default ({ element }: Child) => (
  <Provider store={store}>{element}</Provider>
);
