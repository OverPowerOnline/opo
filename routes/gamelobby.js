var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('GAME LOBBY PAGE');
});

module.exports = router;