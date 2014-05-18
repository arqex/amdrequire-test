//One is required again as a named required, should get the its value from the cache
define(['one', './js/somefolder/other/three'], function(one, three){
	return one + three;
});