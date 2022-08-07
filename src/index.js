import express from 'express'
import 'dotenv/config'

import db from './database/index.js'

import usersRouter from './router/users.router.js'
import catalogRouter from './router/catalog.router.js'
import recordsCatalogForChat from './router/recordsCatalogForChat.router.js'


const app = express()

app.use(express.json())

app.use('/api', usersRouter)
app.use('/api', catalogRouter)
app.use('/api', recordsCatalogForChat)

app.listen(process.env.PORT, async () => {
  await db.sync({ force: false })
  console.log(`Example app listening on port ${process.env.PORT}!`)
})