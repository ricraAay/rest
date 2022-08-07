import users from '../entities/users.entities.js'
import { v4 as uuidv4 } from 'uuid'

class UsersEntityService {
  async create ({ tlgUserId, tlgUserName }) {
    const uuid = uuidv4()

    return await users.create({ 
      id: uuid, 
      name: tlgUserName, 
      tlg_user_id: tlgUserId
    })
  }

  async getUser ({ tlgUserId }) {
    return await users.findAll({ 
      where: {
        tlg_user_id: tlgUserId
      }
    })
  }
}

export default new UsersEntityService ()