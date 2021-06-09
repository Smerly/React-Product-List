import React from 'react';
import data from './data.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const allData = data.map((obj) => obj.category);
const objData = allData.reduce((obj, cat) => {
	obj[cat] = 0;
	return obj;
}, {});

const uniqueObj = Object.keys(objData);

const categoriesAndCounts = allData.reduce((acc, cat) => {
	// if (!(cat in acc)) {
	// 	acc[cat] = 1;
	// } else {
	// 	acc[cat] += 1;
	// }
	if (acc[cat] === undefined) {
		acc[cat] = 1;
	} else {
		acc[cat] += 1;
	}
	return acc;
}, {});

const objCatCount = uniqueObj.map((item) => {
	return { item: item, count: categoriesAndCounts[item] };
});

objCatCount.push({ item: 'All', count: data.length });

export { allData, uniqueObj, categoriesAndCounts, objCatCount };
