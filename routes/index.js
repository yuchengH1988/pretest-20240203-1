var express = require('express');
var router = express.Router();
const states_json = require('../public/states_hash.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET states */
router.get('/states', function (req, res, next) {
  return res.json(
    { states: Object.values(states_json) });
});

module.exports = router;
