import CatalogEntityService from '../database/service/catalogEntity.service.js'
import ChatsEntityService from '../database/service/chatsEntity.service.js'

class CatalogService {
  async getCatalog ({ tlgChatId }) {

    console.log(tlgChatId)

    const errorMessage = 'Вы не создали еще ни одного каталога'
    const row = await ChatsEntityService.getChat({ tlgChatId })

    console.log(row)

    const chatId = row[0]?.dataValues.id

    if (!chatId) {
      throw new Error(errorMessage)
    }

    const result = await CatalogEntityService.getAllCatalogForChat({ chatId })

    if (!result.length) {
      throw new Error(errorMessage)
    }

    return result.map(item => item.dataValues.name)
  }
}

export default new CatalogService ()