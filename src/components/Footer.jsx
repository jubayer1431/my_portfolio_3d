import React from 'react';

const Footer = () => {
	return (
		<div className='bg-black-100  text-center py-5'>
			<h6 className='text-lg text-secondary mb-3'>
				ABDULLAH AL JUBAYER BHUIYAN
			</h6>

			<p> &copy; All Rights Reserved {new Date().getFullYear()}</p>
		</div>
	);
};

export default Footer;
