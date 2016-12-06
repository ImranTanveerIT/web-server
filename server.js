var express = require('express');

var app = express();

/*app.get('/',function(req,res){

	res.send('Hello Express');
});*/

var middleware = {
	requireAuthentication : function(req,res,next){
		console.log('private route hit');
		next();
	},

	logger : function(req,res,next){
		console.log('Request URL is '+req.method+' '+req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(req,res){

	res.send('Hello About!');
});

app.use(express.static(__dirname+'/public'))

app.listen(3002,function(){
	console.log('Express server started');
});