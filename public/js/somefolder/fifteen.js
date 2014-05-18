var dependencies = [
	'/js/somefolder/different/five.js', // Absolute path
	'../../four', // Relative path without extension
	'three', // Named require
	'somefolder/two' // Relative path to the baseUrl
];

define(dependencies, function(five, four, three, two){
	// One has to be loaded inside four, so we can require it using its name
	var one = require('one');
	return five + four + one + two + three;
});