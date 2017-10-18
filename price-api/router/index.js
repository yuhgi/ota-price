const express = require('express');
const app = express();
const router = express.Router();
const api = require('./api');
const mock = require('./mock');
if(process.env.NODE_ENV === 'development'){
    router.use(mock);
}else{
    router.use(api);
}

module.exports = router;
