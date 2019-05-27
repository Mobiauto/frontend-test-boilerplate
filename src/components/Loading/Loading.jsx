import React from 'react';

import loader from '../../images/loader.gif';

const Loading = () => (
	<div className="page page--full page--centered">
		<div className="container">
			<img
				alt="Loading"
				className="full-width"
				src={loader}
				title="Loading"
			/>
		</div>
	</div>
);

export default Loading;