import 'dotenv/config'
import sequelize from "./db.js"
import express from 'express'
// import * as models from "./models/index.js"
import router from "./routes/index.js";
import ErrorHandler from "./middlewares/ErrorHandlerMiddleware.js";

const PORT = process.env.PORT ?? 3000
const app = express()

// console.log(models)
app.use(express.json())
app.use('/api', router)
app.use(ErrorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }

}

start()