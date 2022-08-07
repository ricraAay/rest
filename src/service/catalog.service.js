import CatalogEntityService from '../database/service/catalogEntity.service.js'
import UsersEntityService from '../database/service/usersEntity.service.js'

class CatalogService {
  static async getAllCatalogForUser ({ tlgUserId }) {
    const errorMessage = 'Вы не создали еще ни одного каталога'
    const row = await UsersEntityService.getUser({ tlgUserId })

    const userId = row[0]?.dataValues.id

    if (!userId) {
      throw new Error(errorMessage)
    }

    const result = await CatalogEntityService.getAllCatalogForUser({ userId })

    if (!result.length) {
      throw new Error(errorMessage)
    }

    return result
  }
}

export default new CatalogService ()