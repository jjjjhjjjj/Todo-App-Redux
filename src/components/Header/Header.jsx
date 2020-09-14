import React, { memo } from 'react';
import './Header.css';

const Header = memo(() => {
	return (
		<header>
			<h1 className="title">To-Do List</h1>
			<p className="desc">What is your One Small Step?</p>
		</header>
	);
});

export default Header;
