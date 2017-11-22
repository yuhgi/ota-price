import http from 'http';
import express from 'express';
import serverConf from './config/server';
import router from './router';

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
