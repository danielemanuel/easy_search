import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {

	handleQuery(event){
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


class Search extends React.Component {

	render() {
		return (

			<div className='search'>
				<SearchBar /> 
				<div className='results'>
					<div className='in-stock'>
					<h2><a href='#' >Toothpaste</a></h2>
					<p>$2.99</p>
					<p>Toothpaste is a paste or gel dentifrice used with a toothbrush as an accessory to clean and maintain the aesthetics and health of teeth. Toothpaste is used to promote oral hygiene: it serves as an abrasive that aids in removing the dental plaque and food from the teeth, assists in suppressing halitosis, and delivers active ingredients (most commonly fluoride) to help prevent tooth decay (dental caries) and gum disease (gingivitis).[1] Salt and sodium bicarbonate (baking soda) are among materials that can be substituted for commercial toothpaste.</p>
					</div>
				</div>

			</div>

		)
	}
}





ReactDOM.render(<Search />,document.getElementById('app'));