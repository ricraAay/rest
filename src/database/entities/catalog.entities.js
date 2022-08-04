import { DataTypes, Model } from 'sequelize'

export default class CatalogEntities extends Model {
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
      }
    }, {
      sequelize: userConnection,
      tableName: 'catalog'
    })
  }
}