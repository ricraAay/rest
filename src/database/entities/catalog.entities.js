import { DataTypes, Model } from 'sequelize'
import db from '../index.js'

class CatalogEntities extends Model {
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
      name: {
        type: DataTypes.STRING
      }
    }, {
      sequelize: db,
      tableName: 'catalog',
      createdAt: false,
      updatedAt: false
    })
  }
}

export default CatalogEntities.define(db)