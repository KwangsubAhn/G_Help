module.exports = function ( app ) {
    app.get('/home', function (req, res) {
        if(req.session.user){
            var Commodity = global.dbHelper.getModel('commodity');
            Commodity.find({}, function (error, docs) {
                res.render('home',{Commoditys:docs});
            });
        }else{
            var Commodity = global.dbHelper.getModel('commodity');
            Commodity.find({}, function (error, docs) {
                res.render('home',{Commoditys:docs});
            });
        }
    });
	app.get('/ChooseHostFamily', function(req, res) {
        res.render('ChooseHostFamily');
    });

	app.get('/ViewStaff', function(req, res) {
        res.render('ViewStaff');
    });
	app.get('/RegisterMentor', function(req, res) {
        res.render('RegisterMentor');
    });
    app.get('/ManageEvents', function(req, res) {
        res.render('ManageEvents');
    });
    app.post('/addcommodity', function (req, res) {
        var Commodity = global.dbHelper.getModel('commodity');
        Commodity.create({
            name: req.body.name,
            price: req.body.price,
            imgSrc: req.body.imgSrc
        }, function (error, doc) {
            if (doc) {
                res.send(200);
            }else{
                res.send(404);
            }
        });
    });
}