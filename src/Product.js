import data from './data.json';
import React from 'react';

function Product(props) {
	const { filter } = props;
	return (
		<div className="product row justify-content-center align-items-center">
			{data
				.filter((obj) => obj.category === filter || filter === 'All')
				.map((obj) => {
					return (
						<div className="mt-5 ml-5 mr-5 box">
							<h2
								style={{
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 600,
								}}
							>
								{' '}
								{obj.name}{' '}
							</h2>
							<header
								style={{
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 600,
								}}
							>
								{' '}
								{obj.description}{' '}
							</header>
							<header
								style={{
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 600,
								}}
							>
								{' '}
								{obj.category}{' '}
							</header>
							<div
								style={{
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 600,
								}}
							>
								{' '}
								{obj.price}{' '}
							</div>
							<div
								style={{
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 600,
								}}
							>
								{' '}
								{obj.rating}{' '}
							</div>
							<div
								style={{
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 600,
								}}
							>
								{' '}
								{obj.units}{' '}
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default Product;
