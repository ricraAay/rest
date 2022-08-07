import { Router } from 'express'
import CatalogController from '../controller/catalog.controller.js'

const router = new Router ()

router.get('/allCatalogForUser/:tlgUserId', CatalogController.getAllCatalogForUser)

export default router