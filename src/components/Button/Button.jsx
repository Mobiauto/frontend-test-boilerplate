import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, className, href, widthAuto, ...props }) => {

	const cssClass = () => {
		let cssClass = 'button';

		if(className) cssClass += ` ${className}`;
		if(widthAuto) cssClass += ` button--width-auto`;

		return cssClass;
	};

	return href ? (
		<Link to={href} className={cssClass()} {...props}>
			{children}
		</Link>
	) : (
		<button className={cssClass()} {...props}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
	widthAuto: PropTypes.bool
};

export default Button;

