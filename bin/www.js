// 启动服务
// 引入express
const express = require('express')
// 实例化一个express对象
const app = express()
// 监听3000端口
var server = app.listen(8888, () => {
  let host = server.address().address
  let port = server.address().port
  if (host == '::') {
    host = 'localhost:'
  }
  console.log('启动成功访问地址 http://', host, port)
})

// 暴露
module.exports = app
