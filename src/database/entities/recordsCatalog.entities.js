import { DataTypes, Model } from 'sequelize'
import db from '../index.js'

class RecordsCatalogEntities extends Model {
  static define (db) {
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
      },
      caption: {
        type: DataTypes.STRING
      }
    }, {
      sequelize: db,
      tableName: 'records_catalog',
      createdAt: false,
      updatedAt: false
    })
  }
}

export default RecordsCatalogEntities.define(db)