import { Application } from 'express';
import contactInfoRouter from './api/contactInfo';
import facilityRouter from './api/facility';
import hotelRouter from './api/hotel';
import imageRouter from './api/image';
import locationRouter from './api/location';
import roomRouter from './api/room';
import userRouter from "./api/user"
import amenityRouter from "./api/amenity"
import uploadRouter from "./api/upload"
import authLocalRouter from "./auth/local"
import paymentRouter from './api/payment';
function routes(app: Application) {

  // Aquí puedes agregar las demás rutas si las necesitas
  app.use('/api/contactInfo', contactInfoRouter);
  app.use('/api/facility', facilityRouter);
  app.use('/api/hotel', hotelRouter);
  app.use('/api/image', imageRouter);
  app.use('/api/location', locationRouter);
  app.use('/api/room', roomRouter);
  app.use('/api/user', userRouter);
  app.use('/api/amenities', amenityRouter);
  app.use("/api/upload", uploadRouter);
  app.use("/api/payment", paymentRouter)
  //Auth
  app.use("/auth/local", authLocalRouter)
}

export default routes;
