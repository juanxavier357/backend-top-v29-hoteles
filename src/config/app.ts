import express from 'express';
import { createServer } from "http"

import expressConfig from "./express"
import routes from '../routes';

const app = express()
export const server = createServer(app)

expressConfig(app)
routes(app)

export default app
