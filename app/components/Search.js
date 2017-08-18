import React, { Component } from "react";
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import Results from './Results';

export default class Search extends Component {

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

