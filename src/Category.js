import React from 'react';
import { allData, uniqueObj, categoriesAndCounts, objCatCount } from './data';
import data from './data.json';
import './App.css';

function Category(props) {
	const { filter, onClick } = props;
	// console.log(filter);
	return (
		<div className="category mt-5">
			{objCatCount.map((obj) => {
				//                      if not, then it will be what is after the colon
				const className = obj.item === filter ? 'selected' : '';
				//                  ^ if this,  the ? makes if  ^ then this
				return (
					<button
						style={{
							margin: 15,
							borderRadius: 35,
							fontFamily: 'Montserrat, sans-serif',
							fontWeight: 300,
						}}
						// onClick={() => {
						// 	props.filter = obj.item;
						// }}
						onClick={() => onClick(obj.item)}
						className={className}
					>
						{obj.item} [{obj.count}]
					</button>
				);
			})}
		</div>
	);
}

export default Category;
