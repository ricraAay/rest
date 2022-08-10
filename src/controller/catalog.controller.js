import catalogService from "../service/catalog.service.js"

class CatalogController {
  async getCatalog (request, response) {
    try {
      const result = await catalogService.getCatalog(request.params)
      response.status(200).json(result)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new CatalogController ()