import chats from '../entities/chats.entities.js'
import { v4 as uuidv4 } from 'uuid'

class ChatsEntityService {
  async create ({ tlgChatId, tlgChatName }) {
    const uuid = uuidv4()

    return await chats.create({ 
      id: uuid, 
      name: tlgChatName, 
      tlg_chat_id: tlgChatId
    })
  }

  async getChat ({ tlgChatId }) {
    return await chats.findAll({ 
      where: {
        tlg_chat_id: tlgChatId
      }
    })
  }
}

export default new ChatsEntityService ()