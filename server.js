var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;

//SERVE FILES DIRs
app.use('/public', express.static(__dirname + "/public"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/controllers', express.static(__dirname + "/controllers"));
app.use(express.static(__dirname + "/views"));
app.use("/views", express.static(__dirname + "/views"));




app.listen(PORT, function() {
  console.log('Hey there cowboy your up and running on %s', PORT);
});


app.get('/', function(req, res){
  res.send('/views/index.html');
});
