import CatalogService from "../service/catalog.service.js"

export default class CatalogController {
  static async getAllCatalogForUser (request, response) {
    try {
        const result = await CatalogService.getAllCatalogForUser(request.params)

        response.status(200).send().json(result)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}