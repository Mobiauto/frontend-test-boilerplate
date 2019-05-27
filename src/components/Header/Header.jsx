import React from 'react';
import { connect } from 'react-redux';
import { FaUndo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { resetSearch } from '../../actions';
import { selected } from '../../utils/helpers';

import Button from '../Button/Button';

import logo from '../../images/icon-logo.png';
import './Header.scss';

const Header = ({ selectedBrand, dispatch }) => {

	const reset = e => {
		e.preventDefault();
		dispatch(resetSearch());
	}

	return (
		<header className="header">
			<div className="header__container container">
				<Link className="header__link" to="/">
					<img
						alt="Mobiauto"
						className="header__logo"
						src={logo}
						title="Mobiauto"
					/>
					Mobiauto
				</Link>
				{selectedBrand && (
					<Button
						widthAuto
						onClick={reset}
					>
						<FaUndo />
					</Button>
				)}
			</div>
		</header>
	)
};

const mapStateToProps = state => {
	const { cars: { brands } } = state;

	return {
		selectedBrand: selected(brands)
	}
}

export default connect(mapStateToProps)(Header);