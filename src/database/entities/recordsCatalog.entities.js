import { DataTypes, Model } from 'sequelize'

export default class RecordsCatalogEntities extends Model {
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
      user_id: {
        type: DataTypes.UUID
      },
      chat_id: {
        type: DataTypes.UUID
      },
      type_id: {
        type: DataTypes.UUID
      },
      content: {
        type: DataTypes.TEXT
      },
      catalog_id: {
        type: DataTypes.UUID
      }
    }, {
      sequelize: userConnection,
      tableName: 'records_catalog'
    })
  }
}