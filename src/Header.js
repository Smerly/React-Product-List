import data from './data.json';
import { uniqueObj } from './data';
import React from 'react';
import './App.css';

function Header(props) {
	// const title = props.title;
	// const productCount = props.productCount;
	// const categoryCount = props.categoryCount;

	// ^^ is the same as the line below
	const { title, productCount, categoryCount } = props;
	return (
		<div className="column">
			<div className="d-flex justify-content-center align-items-center mt-5">
				{' '}
				<h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
					{' '}
					{title}
				</h1>
			</div>
			<div className="d-flex justify-content-center align-items-center mt-5">
				<div
					className="mr-5"
					style={{
						fontFamily: 'Montserrat, sans-serif',
						fontWeight: 600,
					}}
				>
					Products: {productCount}
				</div>
				<div
					style={{
						fontFamily: 'Montserrat, sans-serif',
						fontWeight: 600,
					}}
				>
					Category Count: {categoryCount}
				</div>
			</div>
		</div>
	);
}

export default Header;
