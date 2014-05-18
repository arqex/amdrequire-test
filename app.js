//Start express
require = require('amdrequire');

require([__dirname + '/public/js/config'], function(config){
	config.basePath = __dirname + '/public/js/';
	config.publicPath = __dirname + '/public/'
	require.config(config);
});


//console.log(module.paths);

var express = require('express');
var http = require('http');
var app = express();

app.use(express.static('public', {maxAge: 0}));

app.get('*', function(req, res){
	res.sendfile('./public/index.html');
});

var uno;
require(['one'], function(one){
	uno = one;
});
console.log('Uno es ' + uno);

// Let's try the same code as in the browser
require(['./public/js/somefolder/console']);
require(['one'], function(one){
	console.log('... one is ' + one);
});
var two = require(__dirname + '/public/js/somefolder/two.js');
console.log('... two is ' + two);

var server = http.createServer(app);
server.listen(3000);
console.log('Listening on port 3000');