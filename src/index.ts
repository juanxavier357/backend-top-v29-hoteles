import express, { Express, Request, Response, NextFunction } from "express"
import configExpress from "./config/express"
import routes from "./routes"

const app: Express = express()

const PORT = process.env.PORT ?? 8080

// Setup Express
configExpress(app)

// Routes
routes(app)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})
