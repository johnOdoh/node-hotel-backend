import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './app.js'

dotenv.config({ path: './.env' })

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MDB_REMOTE_CONN_STR)
    .then(() => {
        console.log('DB connection successful!')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
