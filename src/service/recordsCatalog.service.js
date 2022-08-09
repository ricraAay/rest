import usersEntityService from '../database/service/usersEntity.service.js'
import chatsEntityService from '../database/service/chatsEntity.service.js'
import catalogEntityService from '../database/service/catalogEntity.service.js'
import recordCatalogEntiyService from '../database/service/recordsCatalogEntity.service.js'
import recordTypeEntityService from '../database/service/recordTypeEntity.service.js'

class RecordsCatalogService {
  
  async _getUser ({ tlgUserId, tlgUserName }) {
    let userResult = await usersEntityService.getUser({ tlgUserId })

    if (userResult.length) {
      return userResult[0].dataValues.id
    }

    // Если пользователь не найден, тогда создаем
    userResult = await usersEntityService.create({ tlgUserId, tlgUserName })

    return userResult.dataValues.id
  }

  async _getChat ({ tlgChatId, tlgChatName }) {
    // Поик чата
    let chatResult = await chatsEntityService.getChat({ tlgChatId })

    if (chatResult.length) {
      return chatResult[0].dataValues.id
    }

    // Если чат не найден, тогда создаем
    chatResult = await chatsEntityService.create({ tlgChatId, tlgChatName})

    return  chatResult.dataValues.id
  }

  async _getOneCatalogSpecificForChat ({ chatId, catalogName, userId }) {
    // Поиск каталога
    let catalogResult = await catalogEntityService.getOneCatalogSpecificForChat({ chatId, catalogName })

    // Если каталог не найден, тогда создаем
    if (catalogResult.length) {
      return catalogResult[0].dataValues.id
    }

    catalogResult = await catalogEntityService.create({ chatId, userId, catalogName })

    return catalogResult.dataValues.id
  }

  async _getRecordType ({ type }) {
    let typeResult = await recordTypeEntityService.getType({ type })
    return typeResult[0].dataValues.id
  }

  async createForChat (payload) {

    const { 
      tlgUserId, 
      tlgChatId, 
      tlgChatName, 
      tlgUserName, 
      content, 
      catalogName, 
      type, 
      caption 
    } = payload

    // Получение идентификатора чата
    const chatId = await this._getChat({ 
      tlgChatId, 
      tlgChatName 
    })

    // Получение идентификатора пользователя
    const userId = await this._getUser({ 
      tlgUserId, 
      tlgUserName 
    })

    // Получение идентификатора каталога
    const catalogId = await this._getOneCatalogSpecificForChat({ 
      chatId,
      userId,
      catalogName 
    })

    const typeId = await this._getRecordType({ 
      type 
    })

    // Создание новой записи
    return await recordCatalogEntiyService.create({  
      chatId, 
      userId, 
      content, 
      catalogId,
      typeId,
      caption
    })

  }
}

export default new RecordsCatalogService ()