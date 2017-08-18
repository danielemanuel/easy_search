import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class SearchBar extends Component {

	handleQuery(event){
		this.props.onQuery(event.target.value)
	}

	render() {
		return (

			<div className='search-bar'>
				<input onChange={this.handleQuery.bind(this)} placeholder='Search' />
			</div>
		)
	}
}

