"use strict";
const path = require('path');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const extend = require('util')._extend

http.listen(process.env.PORT || 2525, function(){
  console.log("PORT : " + process.env.PORT || 2525);
});


var getIP = function (req) {
  if (req.headers['x-forwarded-for']) {
    return req.headers['x-forwarded-for'];
  }
  if (req.connection && req.connection.remoteAddress) {
    return req.connection.remoteAddress;
  }
  if (req.connection.socket && req.connection.socket.remoteAddress) {
    return req.connection.socket.remoteAddress;
  }
  if (req.socket && req.socket.remoteAddress) {
    return req.socket.remoteAddress;
  }
  return '0.0.0.0';
};

require('date-utils') //現在時刻の取得に必要

//選択肢
var a = 0
var b =0
var c = 0
var d = 0

//入力側画面指定
app.use("/controller",express.static(path.join(__dirname, 'public')))

//出力側画面指定
app.get("/display", function(req, res){
  res.sendFile(__dirname + '/index_nico-Display.html');
});
//出力側画面指定
app.get("/chart", function(req, res){
  res.sendFile(__dirname + '/index_chart.html');
});

app.get('/comment', function (req, res) {
  const msg = extend({}, req.query)
  console.log("/IP:" + getIP(req) +'/comment: ' + JSON.stringify(msg))
  io.emit('comment', msg);
  res.end()
})

app.get('/like', function (req, res) {
  const msg = extend({}, req.query);
  var dt = new Date()
  console.log("/IP:" + getIP(req) +'/like: ' + JSON.stringify(msg))
  switch ( JSON.stringify(msg) )
{
    case '{"image":"A"}' : a++;
     break;
    case '{"image":"B"}' : b++;
     break;
    case '{"image":"C"}' : c++;
     break;
    case '{"image":"D"}' : d++;
     break;
    case '{"image":"Reset"}' : a=b=c=d=0;
     break;
    default:
     console.log("etc")
     break;
}
  var stamp_cnt = [[a],[b],[c],[d]]
  io.emit('like', msg)
  io.emit('chart', stamp_cnt)
  console.log(stamp_cnt)
  res.end()
})
