var express = require('express');

var app = express();

app.get('/',function (req,res){
  res.send('dd');
});

app.listen(3000,function(){
  console.log('server on');
});
