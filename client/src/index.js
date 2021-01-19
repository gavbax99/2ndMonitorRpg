import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './constants/reset.css';
import './constants/index.css';

// Screen
import Navigator from "./navigator/Navigator";

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from "./store/reducers/index";
import ReduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

const App = () => (
	<Provider store={store}>
	  <Navigator />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));