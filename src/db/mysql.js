// 启动mysql下发sql指令
// 引入mysql模块
const mysql = require('mysql')
// 引入mysql配置数据
const { MYSQL_CONF } = require('../config/db')

let conn
// 链接数据库
function handleDisconnection() {
  // 创建数据库
  let connection = mysql.createConnection(MYSQL_CONF)
  // 连接数据库
  connection.connect((err) => {
    if (err) setTimeout(handleDisconnection(), 2000)
  })

  // 监听报错
  connection.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('重连')
      handleDisconnection()
    } else {
      throw err
    }
  })

  conn = connection
}

// 统一执行sql函数
function exec(sql) {
  // 链接数据库
  // 每一次执行sql语句 重新链接数据库
  handleDisconnection()
  return new Promise((resolve, reject) => {
    conn.query(sql, (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

// 暴露
module.exports = { exec }
