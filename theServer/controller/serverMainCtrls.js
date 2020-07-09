console.log('####### > serverMainCtrls.js ');

var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderCallbackData = function(req, res, responseBody){
  //console.log('####### > serverMainCtrls.js > renderCallbackData1(responseBody):', responseBody);
  var responseMessage;
  if (!(responseBody instanceof Array)) {
    responseMessage = "API path error!";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      responseMessage = "No data found!";
    }
  }
  //console.log('####### > serverMainCtrls.js > renderCallbackData2 > responseBody: ', responseBody);
  //console.log('####### > serverMainCtrls.js > renderCallbackData2 > responseMessage: ', responseMessage);
  responseBody.sort(function(a, b) {
      return parseFloat(b.time) - parseFloat(a.time);
  })
  res.render('indexView', {
    title: 'MEANCRUDApp',
    pageHeader: {
      title: 'A Presidential MEAN CRUD App'
    },
    sideBlurb: "The 2016 presidential election is upon us! Who do you support and what are your comments regarding this hotly contested event?",
    responseBody: responseBody,
    responseMessage: responseMessage
  });
};

module.exports.indexHomepage = function(req, res){
  //console.log('####### > serverMainCtrls.js > module.exports.indexHomepage 1');
  var requestOptions, path;
  path = '/api/electioncomments';

  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(requestOptions, function(err, response, body) {
      // right now 'indexAC.js' is crunching response to this request ...
      // RESPONSE to this request from 'indexAC.js' just came back ...
      // RESPONSE FROM 'request' is below
      //console.log('####### > serverMainCtrls.js > module.exports.indexHomepage 2');
      renderCallbackData(req, res, body);
    }
  );
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


module.exports.requestAddNewComment = function(req, res){
  //console.log('####### > serverMainCtrls.js > requestAddNewComment');
  var requestOptions, path, postdata;
  path = '/api/electioncomments';
  var d = new Date();
  var time = d.getTime()
  postdata = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    candidate: req.body.candidate,
    comment: req.body.comment,
    time: time
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  console.log('####### > serverMainCtrls.js > requestAddNewComment > postdata HERE!!!!!>>> ', postdata);
  if (!postdata.firstName || !postdata.lastName || !postdata.city || !postdata.state || !postdata.candidate || !postdata.comment) {
    //res.redirect('/error view url');
    //console.log('####### > serverMainCtrls.js > requestAddNewComment > data error 1');
  } else {
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 201) {
          res.redirect('/');
        } else if (response.statusCode === 400 && body.name && body.name === "ValidationError" ) {
            //res.redirect('/error view url');
            //console.log('####### > serverMainCtrls.js > requestAddNewComment > response error 2');
        } else {
            //console.log(body);
            //_showError(req, res, response.statusCode);
        }
      }
    );
  }
};




module.exports.getAddNewComment = function(req, res) {
    res.render('addNewCommentView', {
    title: 'MEANCRUDApp',
    pageHeader: {
      title: 'A Presidential MEAN CRUD App'
    },
    sideBlurb: "The 2016 presidential election is upon us! Who do you support and what are your comments regarding this hotly contested event?"
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









