const http = require('http');
const express = require('express');
const serverConf = require('./config/server');
const router = require('./router');

const app = express();
app.use(router);

const server = http.createServer(app);
server.listen(serverConf.port,(err) => {
    if(err){
        console.log(err.stack);
    }else{
        console.log(`Express mock server listening on http://${serverConf.host}:${serverConf.port}`);
    }
});
