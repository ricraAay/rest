import recordsType from '../entities/recordsType.entities.js'

class RecordTypeEntityService {
  async getType ({ type }) {
    return await recordsType.findAll({ 
      where: {
        tlg_type: type
      }
    })
  }
}

export default new RecordTypeEntityService ()