console.log('####### > apiRoutes.js ');

var express = require('express');
var router = express.Router();
var apiControllers = require('../controller/apiMainCtrls');


router.get('/electioncomments', apiControllers.electioncommentsIndexHomepage);



router.post('/electioncomments', apiControllers.electioncommentsCreate);










































module.exports = router;

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
*/
