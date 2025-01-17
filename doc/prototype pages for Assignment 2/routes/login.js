module.exports = function ( app ) {
    app.get('/login',function(req,res){
        res.render('login');
    });
	app.get('/RegisterHostFamily', function(req, res) {
        res.render('RegisterHostFamily');
    });
	app.get('/AssignMentor', function(req, res) {
        res.render('AssignMentor');
    });

    app.post('/login', function (req, res) {
        var User = global.dbHelper.getModel('user'),
            uname = req.body.uname;
        User.findOne({name: uname}, function (error, doc) {
            if (error) {
                res.send(500);
                console.log(error);
            } else if (!doc) {
                req.session.error = 'Student Num is not existing！';
                res.send(404);
            } else {
               if(req.body.upwd != doc.password){
                   req.session.error = "Password is not correct!";
                   res.send(404);
               }else{
                   req.session.user=doc;
                   res.send(200);
               }
            }
        });
    });

}