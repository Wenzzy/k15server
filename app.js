import 'dotenv/config'
import sequelize from './db.js'
import express from 'express'
import router from './routes/index.js';
import ErrorHandler from './middlewares/ErrorHandler.js';
import cookieParser from 'cookie-parser'
import createFistData from './utils/createFistData.js';

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(ErrorHandler)

const run = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await createFistData()
        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }

}

run()