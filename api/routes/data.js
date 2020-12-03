const TodoData = require('../models/data');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var tododata = new TodoData();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  tododata.getAll((err, datas) => {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).send(datas);
  });
});

module.exports = router;
