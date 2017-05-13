var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('DECK BUILDER PAGE');
});

module.exports = router;