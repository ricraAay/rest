import catalog from '../entities/catalog.entities.js'
import { v4 as uuidv4 } from 'uuid'

class CatalogEntityService {
  /**
   * 
   * Метод создания нового католога
   * @param { String } chatId
   * @param { String } userId
   * @param { String } catalogName
   * @returns { Promise }
   */
  async create ({ chatId, userId, catalogName }) {

    const timestamp = new Date ()
    const uuid = uuidv4()

    return await catalog.create({
      id: uuid,
      created_by: userId,
      created_on: timestamp,
      modifyed_by: userId,
      modifyed_on: timestamp,
      chat_id: chatId,
      user_id: userId,
      name: catalogName
    })
  }

  /**
   * Метод получения всех каталогов для чата
   * @param { string } chatId 
   */
  async getAllCatalogForChat ({ chatId }) {
    return await catalog.findAll({
      where: {
        chat_id: chatId
      }
    })
  }

  /**
   * Метод получения всех каталогов для пользователя
   * @param { string } userId 
   */
  async getAllCatalogForUser ({ userId }) {
    return await catalog.findAll({
      where: {
        user_id: userId
      }
    })
  }

  /**
   * Метод получения конкретного каталога для чата
   * @param { string } chatId 
   * @param { string } catalogName 
   */
  async getOneCatalogSpecificForChat ({ chatId, catalogName }) {
    return await catalog.findAll({
      where: {
        name: catalogName,
        chat_id: chatId
      }
    })
  }

  /**
   * Метод получения конкретного каталога для пользователя
   * @param { string } userId
   * @param { string } catalogName
   */
  async getOneCatalogSpecificForUser ({ userId, catalogName }) {
    return await catalog.findAll({
      where: {
        name: catalogName,
        user_id: userId
      }
    })
  }
}

export default new CatalogEntityService ()