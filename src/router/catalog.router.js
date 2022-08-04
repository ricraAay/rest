import { Router } from 'express'
import CatalogController from '../controller/catalog.controller'

const router = new Router ()

router.get('/catalog', CatalogController.getAll)
router.get('/catalog/:name', CatalogController.getOne)

export default router