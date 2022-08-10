import RecordsCatalogService from '../service/recordsCatalog.service.js'

export default class RecordsCatalogController {
  static async createForChat (request, response) {
    try {
      console.log("request: ", request)
      console.log("request.body: ", request.body)

      const result = await RecordsCatalogService.createForChat(request.body)
      response.status(200).json(result)
    } catch (error) {
      console.log(error)
    }
  }
}