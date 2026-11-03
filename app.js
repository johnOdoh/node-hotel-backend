import express from 'express'
import morgan from 'morgan'
const app = express()

import roomRoute from './Routes/Room.js'
import roomCategoryRoute from './Routes/RoomCategory.js'

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/room-category', roomCategoryRoute)
app.use('/api/room', roomRoute)

app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Booking API')
})

export default app