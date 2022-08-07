import express from 'express'
import 'dotenv/config'

import db from './src/database/index.js'

import catalogRouter from './src/router/catalog.router.js'
import recordsCatalogForChat from './src/router/recordsCatalogForChat.router.js'

const app = express()

app.use(express.json())

app.use('/api', catalogRouter)
app.use('/api', recordsCatalogForChat)

app.listen(process.env.PORT, async () => {
  //await db.sync({ force: false })
  console.log(`Example app listening on port ${process.env.PORT}!`)
})