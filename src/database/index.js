import { Sequelize } from "sequelize"

const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
})

export default db

export function openConnection () {
  return db.authenticate()
}

export function closeConnection () {
  return db.close()
}