import React, { Component } from "react";
import ReactDOM from 'react-dom';


class Result extends Component {

	render() {
		return( 
		<div className='in-stock'>
			<h2><a href='#' >{this.props.product.name}</a></h2>
				<p>{this.props.product.price}</p>
				<p>{this.props.product.description}</p>
		</div>

		)
	}
}

export default Result;