import { Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import contactInfoRouter from './api/contactInfo'
import facilityRouter from './api/facility'
import hotelRouter from './api/hotel'
import imageRouter from './api/image'
import locationRouter from './api/location'
import roomRouter from './api/room'

function routes(app: Application, prisma: PrismaClient) {
  app.get('/api/hotels', async (req: Request, res: Response) => {
    const { hotel, checkIn, checkOut, guests } = req.query;

    try {
      const hotels = await prisma.hotels.findMany({
        where: {
          hotel: {
            contains: hotel as string,
          },
          checkIn: {
            gte: checkIn as string,
          },
          checkOut: {
            lte: checkOut as string,
          },
          guests: {
            gte: guests as string,
          },
        },
      });

      res.json(hotels);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      res.status(500).json({ error: 'Error fetching hotels' });
    }
  });

  // Aquí puedes agregar las demás rutas si las necesitas
  app.use('/api/contactInfo', contactInfoRouter);
  app.use('/api/facility', facilityRouter);
  app.use('/api/hotel', hotelRouter);
  app.use('/api/image', imageRouter);
  app.use('/api/location', locationRouter);
  app.use('/api/room', roomRouter);
}

export default routes;

