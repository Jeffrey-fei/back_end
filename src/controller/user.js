// sql语句
// 引入sql方法
const { exec } = require('../db/mysql')

// 查询所有用户的sql
const userList = () => {
  const sql = `select * from users`
  return exec(sql).then((rows) => {
    return rows || {}
  })
}

// 添加用户信息
const userAdd = (mess) => {
  const { name, age, sex } = mess
  const sql = `INSERT INTO users (name, age, sex) VALUES ('${name}', ${age}, ${sex})`
  return exec(sql)
    .then((res) => {
      if (res.affectedRows === 1) {
        return [null]
      } else {
        return [res.message]
      }
    })
    .catch((err) => {
      return [err]
    })
}

// 删除用户
const userDel = (mess) => {
  const sql = `DELETE from users where id = ${mess.id}`
  return exec(sql)
    .then((res) => {
      if (res.affectedRows === 1) {
        return [null]
      } else {
        return [res.message]
      }
    })
    .catch((err) => {
      return [err]
    })
}

// 修改用户信息
const userEdit = (mess) => {
  const { name, age, sex, id } = mess
  const sql = `update users set name = '${name}', age = ${age}, sex = ${sex} where id = ${id}`
  return exec(sql)
    .then((res) => {
      if (res.affectedRows === 1) {
        return [null]
      } else {
        return [res.message]
      }
    })
    .catch((err) => {
      return [err]
    })
}

// 暴露
module.exports = {
  userList,
  userAdd,
  userDel,
  userEdit,
}
