import RecordsCatalog from '../entities/recordsCatalog.entities.js'
import { v4 as uuidv4 } from 'uuid'

class CatalogEntityService {
  async create (payload) {
    const { 
      chatId, 
      userId, 
      content, 
      catalogId, 
      typeId, 
      caption 
    } = payload

    const timestamp = new Date ()
    const uuid = uuidv4()

    return await RecordsCatalog.create({
      id: uuid,
      created_by: userId,
      created_on: timestamp,
      modifyed_by: userId,
      modifyed_on: timestamp,
      chat_id: chatId,
      user_id: userId,
      content: content,
      catalog_id: catalogId,
      type_id: typeId,
      caption: caption
    })
  }

  async getRecordsCatalogByChat ({ chatId }) {
    return await RecordsCatalog.findAll({
      where: {
        chat_id: chatId
      }
    })
  }
}

export default new CatalogEntityService ()