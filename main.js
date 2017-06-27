
module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html');
     });
     app.get('/developer',function(req,res){
	res.render('developer.html');
     });
     app.get('/laboratory',function(req,res){
	res.render('laboratory.html');
     });
}
