import React, { Component } from "react";
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {

	handleQuery(event){
		this.props.onQuery(event.target.value)
		console.log('QUERYYYY: ' + event.target.value )
	}

	render() {
		return (

			<div className='search-bar'>
				<input onChange={this.handleQuery.bind(this)} placeholder='Search' />
			</div>
		)
	}

}

export default SearchBar;