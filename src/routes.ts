import { Application } from 'express'

import contactInfoRouter from './api/contactInfo'
import facilityRouter from './api/facility'
import hotelRouter from './api/hotel'
import imageRouter from './api/image'
import locationRouter from './api/location'
import roomRouter from './api/room'

function routes(app: Application) {
    app.use('/api/contactInfo', contactInfoRouter)
    app.use('/api/facility', facilityRouter)
    app.use('/api/hotel', hotelRouter)
    app.use('/api/image', imageRouter)
    app.use('/api/location', locationRouter)
    app.use('/api/room', roomRouter)
}

export default routes