import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

const products = require('./products.js')

class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			query: ''
		};
	}

	handleQuery(query) {
		this.setState({ "query": query.toLowerCase().trim() })
	}
	render() {
		return (

			<div className='search'>
				<SearchBar onQuery={ this.handleQuery.bind(this)} /> 
				<Results products={ this.props.products } query={this.state.query} />
			</div>

		)
	}
}

ReactDOM.render(<Search products={products}/>,document.getElementById('app'));