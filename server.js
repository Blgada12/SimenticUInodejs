
var express = require('express');
var app = express();
var router = require('./main')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(80, function(){
    console.log("Express server has started on blgada.oa.to")
});

app.use(express.static('views'));
app.use(express.static('./views/img'));

