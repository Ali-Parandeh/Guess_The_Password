var express = require("express");
var app = express();

// Serve views directory which includes the html files
app.use(express.static(__dirname + "/views"));
// Serve "public" directory which includes the css files
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
    res.sendFile("index.html");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("App has started");
})