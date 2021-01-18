import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './constants/reset.css';
import './constants/index.css';

// Screen
import Navigator from "./navigator/Navigator";

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./store/reducers/index";

const store = createStore(reducer);

const App = () => (
	<Provider store={store}>
	  <Navigator />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));