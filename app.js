import 'dotenv/config'
import sequelize from "./db.js"
import express from 'express'
import models from "./models/models.js"

const PORT = process.env.PORT ?? 3000
const app = express()

// console.log(models)
// app.use()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }

}

start()