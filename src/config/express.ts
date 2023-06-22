import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
require('dotenv').config()

function configExpress(app: Application) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  // Agrega cualquier otra configuración de Express que necesites
}

export default configExpress;
