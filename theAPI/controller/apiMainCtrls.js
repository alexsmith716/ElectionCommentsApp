console.log('####### > apiMainCtrls.js ');

var mongoose = require('mongoose');
var MongooseModel = mongoose.model('ElectionCommentsAppModel');

var sendJSONresponse = function(res, status, content) {
  //console.log('####### > apiMainCtrls.js > sendJSONresponse (content):', content);
  res.status(status);
  res.json(content);
};

var buildResponseIndexHomepage = function(req, res, results) {
  //console.log('####### > apiMainCtrls.js > buildResponseIndexView ');
  var responseBody = [];
  // Will return the time the ObjectId was created
  // ObjectId("505bd76785ebb509fc183733").getTimestamp();
  results.forEach(function(doc) {
    responseBody.push({
      firstName: doc.firstName,
      lastName: doc.lastName,
      city: doc.city,
      state: doc.state,
      candidate: doc.candidate,
      comment: doc.comment,
      time: doc.time,
      _id: doc._id
    });
  });
  //console.log('####### > apiMainCtrls.js > buildResponseIndexView > return responseBody');
  return responseBody;
};

module.exports.electioncommentsIndexHomepage = function(req, res) {
  //console.log('####### > apiMainCtrls.js > electioncommentsIndexHomepage 1 ');
  //var posts = MongooseModel.find({}).sort({ _id: -1 }).limit(5)
  //MongooseModel.find({}, function (err, results) {
  //MongooseModel.find({}).sort({ time: -1 }).limit(5)
  var q = MongooseModel.find({}).sort({_id: -1}).limit(5);
  //MongooseModel.find({}, function (err, results) {
  q.exec(function(err, results) {
    var responseBody;
    if (err) {
      //console.log('Mongoose find error:', err);
      sendJSONresponse(res, 404, err);
    } else {
      //console.log('####### > apiMainCtrls.js > electioncommentsIndexHomepage 2');
      responseBody = buildResponseIndexHomepage(req, res, results);
      //console.log('####### > apiMainCtrls.js > electioncommentsIndexHomepage 3');
      // send RESPONSE back to indexSC REQUEST !!!
      sendJSONresponse(res, 200, responseBody);
    }
  });
};

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module.exports.electioncommentsCreate = function(req, res) {
  //console.log('####### > apiMainCtrls.js > electioncommentsCreate 1 ');
  MongooseModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    candidate: req.body.candidate,
    comment: req.body.comment,
    time: req.body.time,
  }, function(err, electioncomment) {
    if (err) {
      //console.log('####### > apiMainCtrls.js > electioncommentsCreate 2 > Err: ', err);
      //console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      //console.log('####### > apiMainCtrls.js > electioncommentsCreate 3 > Good: ', electioncomment);
      sendJSONresponse(res, 201, electioncomment);
    }
  });
};















































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



