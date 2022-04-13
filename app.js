const express = require('express')
// 引入接口为user的路由
const user = require('./src/router/user')
// 引入服务js
const app = require('./bin/www')
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requestd-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// 使用express对post请求参数进行处理
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

// 使用user路由
app.use('/user', user)
