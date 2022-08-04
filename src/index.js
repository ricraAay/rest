import express from 'express'
import 'dotenv/config'
//import router from './router/index.js'
import database from './database/index.database.js'

const app = express()

app.use(express.json())
//app.use('/api', router)

app.listen(process.env.PORT, async () => {
  await database.userConnection.sync({ force: false })
  console.log(`Example app listening on port ${process.env.PORT}!`)
})