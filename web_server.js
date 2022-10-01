//require('/node_modules');

var express = require("express");
var app = express();
var fs = require("fs");

var HTTP_PORT = process.env.PORT || 8080;

//call this function after the http server started
function onHttpStart(){
    console.log("Express http server listening on " + HTTP_PORT);
}

app.get("/", function(req, resp){
    var username = req.query.username;
    var password = req.query.password;

    //check the database to see if username exists
    resp.send("<h1>Username: " + username + ", password: " + password + "</h1>");
});
//app.listen(8080, start);
//setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);