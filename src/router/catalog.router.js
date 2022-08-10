import { Router } from 'express'
import CatalogController from '../controller/catalog.controller.js'

const router = new Router ()

router.get('/catalog/:tlgChatId', CatalogController.getCatalog)

export default router