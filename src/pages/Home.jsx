import React from 'react';
import { connect } from 'react-redux';

import { resetSearch } from '../actions'

import logo from '../images/icon-logo.png';

import Button from '../components/Button/Button';

const Home = (props) => {

	props.dispatch(resetSearch());

	return (
		<div className="page page--full page--centered">
			<div className="container">
				<h1 className="my-0 logo">
					<img
						alt="Mobiauto"
						className="full-width"
						src={logo}
						title="Mobiauto"
					/>

					<br />

					<span className="my-1 d-inline-block">Mobiauto</span>
				</h1>

				<p>
					Find a car <span role="img" aria-label="Oncoming Automobile">🚘</span>
					<br/>
					Filtre por <strong>marca, modelo, ano e valor</strong> para encontrar o carro ideal para você!
				</p>

				<Button href="/search">Começar!</Button>
			</div>
		</div>
	);
};

export default connect(null)(Home);