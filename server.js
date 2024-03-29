var express = require('express');

var app = express();

var PORT = process.env.PORT || 3002

/*app.get('/',function(req,res){

	res.send('Hello Express');
});*/

var middleware = require ('./middleware.js');

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(req,res){

	res.send('Hello About!');
});

app.use(express.static(__dirname+'/public'))

app.listen(PORT,function(){
	console.log('Express server started');
});