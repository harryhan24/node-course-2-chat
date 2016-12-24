const path = require('path');
const express = require('express');


const publicPath = path.join(__dirname,'../public');

const port = 3000;
var app = express();

//use middleware
app.use(express.static(publicPath));

app.listen(3000, ()=>{
   console.log(`server is running ${port}`);

});
