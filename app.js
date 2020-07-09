
console.log('####### > app.js ');


var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

require('./theAPI/model/dbConnector');

app.set('views', path.join(__dirname, 'theServer', 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var serverRoutes = require('./theServer/routes/serverRoutes');
var apiRoutes = require('./theAPI/routes/apiRoutes');

var paginate = require('mongoose-range-paginate')
var sortKey = 'time'
var sort = '-' + sortKey

app.use('/', serverRoutes);
app.use('/api', apiRoutes);

module.exports = app;

/*
{
	"_id" : ObjectId("577c1f3826ec5cfc0c8811db"),
	"firstName" : "Elmerr",
	"lastName" : "Fuddly",
	"city" : "Wodds",
	"state" : "AR",
	"candidate" : "Donald Trump",
	"comment" : "This is my comment.",
	"__v" : 0
}
*/

/*
####### > app.js 
####### > dbConnector.js 
####### > theSchema.js 
####### > indexSR.js
####### > indexSC.js 
####### > indexAR.js 
####### > indexAC.js 
Mongoose connected to: mongodb://localhost/SuperBasicApiApp

Above before app launched +++++++++++++++++++++++++++++++++++

####### > indexSC.js > module.exports.indexView 1


####### > indexAC.js > module.exports.basicApiList 1 
####### > indexAC.js > module.exports.basicApiList 2
####### > indexAC.js > buildBasicApiList 
####### > indexAC.js > buildBasicApiList > return responseBody
####### > indexAC.js > module.exports.basicApiList 3
####### > indexAC.js > sendJSONresponse (content): [ { theText: 'Numquam itaque et hic reiciendis.',
    _id: 57798c4e102b1b3b52a33c3b },
  { theText: 'NumquamXXX itaque et hic reiciendis.',
    _id: 57798f0c102b1b3b52a33c3c } ]
####### > indexAC.js > module.exports.basicApiList 4


####### > indexSC.js > module.exports.indexView 2
####### > indexSC.js > renderCallbackData1(responseBody): [ { theText: 'Numquam itaque et hic reiciendis.',
    _id: '57798c4e102b1b3b52a33c3b' },
  { theText: 'NumquamXXX itaque et hic reiciendis.',
    _id: '57798f0c102b1b3b52a33c3c' } ]
####### > indexSC.js > renderCallbackData2
####### > indexSC.js > module.exports.indexView 3
*/



