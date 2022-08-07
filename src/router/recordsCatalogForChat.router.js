import { Router } from 'express'
import RecordsCatalogController from '../controller/recordsCatalog.controller.js'

const router = new Router ()

router.post('/recordsCatalog', RecordsCatalogController.createForChat)

export default router