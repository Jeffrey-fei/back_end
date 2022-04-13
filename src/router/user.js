// 写响应接口
// 引入express模块
const express = require('express')
// 创建 user路由
const user = express.Router()
// 从../controller/user 引入sql方法
const { userList, userAdd, userDel, userEdit } = require('../controller/user')
// 引入成功失败 返回方法
const { success, fail } = require('../model/resModel')

// 用户列表
user.get('/userList', async (req, res) => {
  // sql返回值
  const result = await userList()
  //返回给前端
  res.send(success('成功', result))
})

// 增加用户
user.post('/userAdd', async (req, res) => {
  // sql返回值
  const result = await userAdd(req.body)
  if (result[0]) {
    res.send(fail('失败', result))
  } else {
    res.send(success('保存成功'))
  }
})

// 删除用户
user.post('/userDel', async (req, res) => {
  // sql返回值
  const result = await userDel(req.body)
  if (result[0]) {
    res.send(fail('失败', result))
  } else {
    res.send(success('删除成功'))
  }
})

// 修改用户
user.post('/userEdit', async (req, res) => {
  // sql返回值
  const result = await userEdit(req.body)
  if (result[0]) {
    res.send(fail('失败', result))
  } else {
    res.send(success('修改成功'))
  }
})

// 暴露
module.exports = user
