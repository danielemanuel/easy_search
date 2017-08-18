import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
const products = require('./products.js')

ReactDOM.render(
			<Search products={products}/>,
			document.getElementById('app')
		);