import { DataTypes, Model } from 'sequelize'
import db from '../index.js'

class RecordsTypeEntities extends Model {
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
      tableName: 'records_type',
      createdAt: false,
      updatedAt: false
    })
  }
}

export default RecordsTypeEntities.define(db)