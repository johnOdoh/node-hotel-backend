const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({ path: './.env' })

const app = require('./app')
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
