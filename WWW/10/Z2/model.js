const fs = require('fs-extra');
const db = fs.readJSONSync('./db.json')

/**
 * 
 * @param {string} fullName 
 */

function firstLetters(fullName) {
	return fullName
				.split(' ')
				.map( el => el[0])
				.join('');
}

function produceAllNames (fullName) {
	fullName = fullName.toUpperCase();
	fullName.trim();
	const acr = firstLetters(fullName);
	const result = [fullName,acr];
	if(fullName.startsWith("THE ") || fullName.startsWith("A ")){
		const withoutThe = fullName
									.split(" ")
									.slice(1)
									.join(" ");
		result.push(withoutThe);
		result.push(firstLetters(withoutThe));
	}
	return result;
}

function findAll(query) {
	if(!query) return [...db.movies];
	query = query.toUpperCase();
	return db.movies.filter(
		movie => {
			const title = movie.title;
			const allKeys = produceAllNames(title);
			return allKeys.reduce((sum, key) => sum || key.startsWith(query), false);
		}
	)
}

module.exports = findAll;