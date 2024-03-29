import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
	rootReducer,
	{},
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>
	, document.getElementById('root'));
	
serviceWorker.unregister();
