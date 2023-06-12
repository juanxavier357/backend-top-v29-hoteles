import express, { Express } from 'express';
import configExpress from './config/express';
import routes from './routes';
import { PrismaClient } from '@prisma/client';

const app: Express = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 8080;

// Setup Express
configExpress(app);

// Routes
routes(app, prisma);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

