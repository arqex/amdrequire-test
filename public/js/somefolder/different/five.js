define(['../other/seven.js'], function(seven){
	//One must have been loaded inside seven. So we can require it directly now:
	var one = require('one');
	return seven - one - one;
});