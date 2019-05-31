import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import {cart, products} from './reducers';
import ReduxThunk from 'redux-thunk';
//import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    cart: cart,
    products: products
});
const initalState = {
    cart: {items: []},
    products: {products: []}
};
const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk)) (createStore);
let store = createStoreWithMiddleware(
    rootReducer,
    initalState
);
store.dispatch({ type: "READ_CART" });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
