
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
 
var mongoose = require("mongoose");
// mongoose set
global.dbHelper = require( './common/dbHelper' );
global.db = mongoose.connect("mongodb://127.0.0.1:27017/GHelpData");

var bodyParser = require('body-parser');

// session build
var session = require('express-session');
app.use(session({
    secret:'secret',
    cookie:{
        maxAge:1000*60*30
    }
}));
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});





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

app.post('/RegisterHostFamily', function (req, res) {

        var HostFamily = global.dbHelper.getModel('HostFamily'),
            HostFamilyName = req.body.uHostFamilyName;
        HostFamily.findOne({cHostFamilyName: HostFamilyName}, function (error, doc) {
            if (error) {
                res.send(500);
                req.session.error = 'Network Error!';			
                console.log(error);
            } else if (doc) {
                req.session.error = 'This HostFamily has been registered!';
                res.send(500);
				
            } else {
                HostFamily.create({
                    cHostFamilyName: req.body.uHostFamilyName,
                    cAddress: req.body.uAddress,
					cPhoneNum: req.body.uPhoneNum,
					cAssignStudentNum: [1,2,3,4]
                }, function (error, doc) {
                    if (error) {
                        res.send(500);
                        console.log(error);
                    } else {						
                        req.session.error = 'Register HostFamily Success!';
                        res.send(200);
                    }
                });
            }
        });
	 });
	
app.get('/index', function(req, res){
	  res.render('index', {
	    title: 'index'
	  });
	  req.session.user = null;
      req.session.error = null;

	});

app.post('/index', function (req, res) {
        var Student = global.dbHelper.getModel('Student'),
            uname = req.body.uname;
        Student.findOne({cStuID: uname}, function (error, doc) {
            if (error) {
                res.send(500);
                console.log(error);
            } else if (!doc) {
                req.session.error = 'Student Id is not exsiting!';
                res.send(404);
            } else {
               if(req.body.upwd != doc.cPassWord){
                   req.session.error = "Password Error!";
                   res.send(404);
               }else{
                   req.session.user=doc;
                   res.send(200);
               }
            }
        });
    });

app.get('/home', function(req, res){

		var Course = global.dbHelper.getModel('Course'),
			currentstu = req.session.user;

		    Course.find({cStuMajor: currentstu.cStuMajor}, function (error, docs) {
                res.render('home',{user:req.session.user,Courses:docs});
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
app.post('/RegisterMentor', function (req, res) {

		var Student = global.dbHelper.getModel('Student'),
			currentstu = req.session.user,
            StuID = req.session.user.cStuID;
			if (currentstu.cIsMentor == true){
				res.send(500);
			}else if (currentstu.cSemester == 0){
				res.send(500);
			}else{
                Student.update({"cStuID": StuID},{$set : { cIsMentor : true }
                }, function (error, doc) {
                    if (error) {
                        res.send(500);
                    } else {						
                        req.session.error = 'Register Mentor Success!';
                        res.send(200);
                    }
                });
            }
        });

app.get('/ChooseHostFamily', function(req, res){
	  res.render('ChooseHostFamily', {
	    title: 'ChooseHostFamily'
	  });
	});