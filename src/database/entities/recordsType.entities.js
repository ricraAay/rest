import { DataTypes, Model } from 'sequelize'
import db from '../index.js'

class RecordsTypeEntities extends Model {
  static define (db) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      tlg_type: {
        type: DataTypes.STRING
      },
      description: {
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