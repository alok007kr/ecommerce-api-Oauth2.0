import express from 'express';
import {APP_PORT, DB_URL} from './config';
import errorHandler from './middlewares/errorHandler';
import route from './routes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
const app = express();
import path from 'path'

//Mongoose Connection
const url = DB_URL
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
})

// Getting the appRoot global
global.appRoot = path.resolve(__dirname)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api',route);
app.use('/uploads', express.static('uploads'))

app.use(errorHandler);
app.listen(APP_PORT, () => {
    console.log(`Listening to the port ${APP_PORT}`)
})