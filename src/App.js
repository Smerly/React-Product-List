import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	allData,
	uniqueObj,
	categoriesAndCounts,
	objCatCount,
} from './data.js';
import data from './data.json';
import Product from './Product';
import Category from './Category';
import Header from './Header';
import React, { useState } from 'react';

function App() {
	const [filter, setFilter] = useState('All');
	return (
		<div style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
			<div
				className="container justify-content-center align-items-center"
				style={{ backgroundColor: 'white', border: 'black 1px' }}
			>
				<Header
					productCount={data.length}
					categoryCount={uniqueObj.length}
					title="Productify"
				/>
				<Category
					filter={filter}
					onClick={(newCategory) => setFilter(newCategory)}
				/>
				<Product filter={filter} />
			</div>
		</div>
	);
}

/*

File Structure:

- div.app <- selectCategory
  - Header
  - Category
  - Product
   


*/

export default App;
