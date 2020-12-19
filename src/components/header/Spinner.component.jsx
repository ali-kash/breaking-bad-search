import React from 'react';

const Spinner = () => {
	return (
		<img
			src={require('../../images/spinner.gif')}
			alt='loading'
			style={{ width: '200px', margin: 'auto', display: 'block' }}
		/>
	);
};

export default Spinner;
