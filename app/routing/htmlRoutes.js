var path = require('path');
var fs = require('fs');

//ROUTING

module.exports = function(app){
  
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/homepage.html'));
  });
};