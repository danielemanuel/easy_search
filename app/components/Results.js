import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Result from './Result';

class Results extends Component {

	constructor(props) {
		super(props);
		this.state = {
			foundProducts: props.products
		}
	}
	componentWillReceiveProps(nextProps) {
		const foundProducts = nextProps.products.filter(product => {
			return product.name.toLowerCase().match(nextProps.query.toLowerCase()) || 
			product.description.toLowerCase().match(nextProps.query.toLowerCase());
		});
		this.setState({ 
			foundProducts: foundProducts 
		});
	}

	render() {
		return(
			<div className='results'>
				{this.state.foundProducts.map(function(product, i){
					return (
						<Result key={i} product={product} />
					)
				})}
			</div>

		)
	}
}

export default Results;