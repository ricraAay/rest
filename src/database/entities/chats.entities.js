import { DataTypes, Model } from 'sequelize'
import db from '../index.js'

class ChatsEntities extends Model {
  static define (db) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      tlg_chat_id: {
        type: DataTypes.NUMBER
      }
    }, {
      sequelize: db,
      tableName: 'chats',
      createdAt: false,
      updatedAt: false
    })
  }
}

export default ChatsEntities.define(db)