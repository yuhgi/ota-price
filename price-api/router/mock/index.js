const express = require('express');

const router = express.Router();

router.use((req,res) => {
    console.log('using mock');
    console.log(req.path);
    res.end('hello world');
});

module.exports = router;