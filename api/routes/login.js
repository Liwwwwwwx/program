var express = require('express');
var router = express.Router();
var LoginData = require('../models/login.js');
var loginData = new LoginData();
var db = require('../models/database.js')

router.get('/', function (req, res) {
  console.log('收到');
  loginData.getAll((err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.send(datas);
    }
  });
});

router.post('/land', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  var name = req.body.name;
  var psw = req.body.psw;
  loginData.getOne(name, (err, data) => {
    console.log(data)
    let password = '' + data[0].password;
    if (err) {
      console.log(err);
      res.send(JSON.stringify({
        isLogin: false,
        msg: '错误',
        status: '101'
      }));
    } else {
      if (psw !== password) {
        res.send(JSON.stringify({
          isLogin: false,
          status: '200',
          msg: '用户名密码错误'
        }))
      }
      else {
        res.send(JSON.stringify({
          data: {
            username: name,
            password: psw
          },
          isLogin: true,
          status: '200',
          msg: '登陆成功'
        }))
      }

    }
  })
})

module.exports = router;
