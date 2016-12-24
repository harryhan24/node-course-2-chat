const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

const port = 3000;
var app = express();
//이 방식이나 app 방식이나 차이가 없다
var server = http.createServer(app);

//알아서 io를 열어줌
var io = socketIO(server);

//use middleware
app.use(express.static(publicPath));

io.on('connection', (socket)=>{
   console.log('New User Connected');

   //connection으로 메세지 보내기
   socket.on('disconnect', ()=>{
      console.log('User was disconnted');

   });

});
server.listen(3000, ()=>{
   console.log(`server is running ${port}`);
});
