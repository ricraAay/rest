import { DataTypes, Model } from 'sequelize'
import db from '../index.js'

class UsersEntities extends Model {
  static define (db) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      tlg_user_id: {
        type: DataTypes.NUMBER
      }
    }, {
      sequelize: db,
      tableName: 'users',
      createdAt: false,
      updatedAt: false
    })
  }
}
export default UsersEntities.define(db)