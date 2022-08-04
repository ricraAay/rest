import { DataTypes, Model } from 'sequelize'

export default class ChatsEntities extends Model {
  static define (userConnection) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      created_by: {
        type: DataTypes.UUID
      },
      created_on: {
        type: DataTypes.DATE
      },
      modifyed_by: {
        type: DataTypes.UUID
      },
      modifyed_on: {
        type: DataTypes.DATE
      },
      name: {
        type: DataTypes.STRING
      },
      tlg_chat_id: {
        type: DataTypes.NUMBER
      }
    }, {
      sequelize: userConnection,
      tableName: 'chats'
    })
  }
}