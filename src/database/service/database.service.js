export default class Database {
  static connect (sequelize) {
    const userConnection = new sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
      host: process.env.HOST,
      dialect: process.env.DIALECT
    })

    return {
      userConnection,
      sequelize
    }
  }
}