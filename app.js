
/**   
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
app.engine( '.html', require( 'ejs' ).__express );
app.set('view engine', 'html');


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



app.get('/RegisterHostFamily', function(req, res){
	  res.render('RegisterHostFamily', {
	    title: 'RegisterHostFamily'
	  });
	});

app.get('/home', function(req, res){
	  res.render('home', {
	    title: 'home'
	  });
	});

app.get('/AssignMentor', function(req, res){
	  res.render('AssignMentor', {
	    title: 'AssignMentor'
	  });
	});

app.get('/ManageEvents', function(req, res){
	  res.render('ManageEvents', {
	    title: 'ManageEvents'
	  });
	});

app.get('/ViewStaff', function(req, res){
	  res.render('ViewStaff', {
	    title: 'ViewStaff'
	  });
	});

app.get('/RegisterMentor', function(req, res){
	  res.render('RegisterMentor', {
	    title: 'RegisterMentor'
	  });
	});

app.get('/ChooseHostFamily', function(req, res){
	  res.render('ChooseHostFamily', {
	    title: 'ChooseHostFamily'
	  });
	});