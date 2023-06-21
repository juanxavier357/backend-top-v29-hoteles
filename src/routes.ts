import { Application } from 'express';
import contactInfoRouter from './api/contactInfo';
import facilityRouter from './api/facility';
import hotelRouter from './api/hotel';
import imageRouter from './api/image';
import locationRouter from './api/location';
import roomRouter from './api/room';
import userRouter from "./api/user"
import amenityRouter from "./api/amenity"
import roleRouter from "./api/role"
import authLocalRouter from "./auth/local"
function routes(app: Application) {

  // Aquí puedes agregar las demás rutas si las necesitas
  app.use('/api/contactInfo', contactInfoRouter);
  app.use('/api/facility', facilityRouter);
  app.use('/api/hotel', hotelRouter);
  app.use('/api/image', imageRouter);
  app.use('/api/location', locationRouter);
  app.use('/api/room', roomRouter);
  app.use('/api/user', userRouter);
  app.use('/api/amenity', amenityRouter);
  app.use("/api/role", roleRouter)
  //Auth
  app.use("/auth/local", authLocalRouter)
}

export default routes;
