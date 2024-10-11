import express from 'express';
import 'dotenv/config' 

import routes from './routes.js'
import expressInit from './config/expressInit.js';
import handlebarsInit from './config/handlebarsInit.js';
import mongooseInit from './config/mongooseInit.js';

const app = express();

mongooseInit()
expressInit(app)
handlebarsInit(app)

app.use(routes)


app.listen(3000, () => console.log('Server is running on http://localhost:3000'));