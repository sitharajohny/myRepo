var express = require("express");
var server = express();
var path=require("path");


function start(){
    console.log("server is started onport 8080!!")
}

server.get("/", function(req, resp){
    resp.send("<h1>Hello World!<h1>");
})

server.get("/contact", function(req, resp){
    resp.send("<p>We are located in Seneca College </p>");
})

server.get("/about", function(req, resp){
    resp.send("<p>We are web developers </p>");
})

server.get("/about/student", function(req, resp){
    resp.send("<p>Our students are perfect </p>");
})

server.get("/index", function(req, resp){
    resp.sendFile(path.join(__dirname,"/index.html"));
})

server.get("/*", function(req, resp){
    resp.send("<h1>Resource not available! <br> Please correct the request link</h1>");
})

server.listen(8080, start);