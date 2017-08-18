import React, { Component } from "react";
import ReactDOM from 'react-dom';


export default class Result extends Component {

	displayPrice(price) {
		return (price / 100.00)
	}

	render() {
		return( 
		<div className='in-stock'>
			<h2><a href='#' >{this.props.product.name}</a></h2>
				<p>${this.displayPrice(this.props.product.price)}</p>
				<p>{this.props.product.description}</p>
		</div>

		)
	}
}

