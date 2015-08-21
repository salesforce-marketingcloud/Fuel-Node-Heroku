var express = require('express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('home', {
		title: 'Salesforce Marketing Cloud'
	});
});

app.listen(app.get('port'));

module.exports = app;