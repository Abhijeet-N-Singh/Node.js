const express = require ("express");
var app = express();
app.get("/", function (request, response){
    response.send("Hello i am implementing my first Node Project!!");
});
app.listen(8080, function () 
{
    console.log("Started Node.js application on port %d", 8080);
});
