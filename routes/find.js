var express = require('express');
var router = express.Router();

var twit = require('twitter');
var twitter = new twit({
  consumer_key: 'XXXX',
  consumer_secret: 'XXXX',
  access_token_key: 'XXXX',
  access_token_secret: 'XXXX'
});

/* GET search results. */
router.get('/', function(req, res) {
  console.log(req.query.search);

  twitter.get('followers/list', {screen_name: req.query.search, count: 200}, function(error, params, response){
    res.send(params);
  });

});

module.exports = router;
