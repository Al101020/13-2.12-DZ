// import { randomUUID } from "node:crypto";
import http from "node:http";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import pino from "pino";
import pinoPretty from "pino-pretty";

import slowDown from 'express-slow-down';

const app = express();
const logger = pino(pinoPretty());



const movies = [{
    'time': '18:04 25.03.2019',
    'title': `"Люди Икс: Тёмный феникс" - свой против своих. Показ стартует 7 июня`
  }, 
  {
    'time': '18:04 20.03.2019',
    'title': `"Джон Уик 3" - продолжение истории наёмного убийцы уже 16 мая в кино`
  }, 
  {
    'time': '18:04 19.03.2019',
    'title': `"Мстители 4: Финал" показ стартует 25 апреля`
  }
];

const apiLimiter = slowDown({
    windowMs: 5 * 60 * 1000,  // 5 minutes
    delayAfter: 1,              // Allow only one request at full speed
    // delayMs: hits => hits * hits * 1000 // Exponential delay
    delayMs: hits => hits * 1000 // Exponential delay
});


app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});
app.use('/movies', apiLimiter);

// app.post('/movies', async (request, response) => {

//   if (request) {    // logger.error(`!!!!!!!!!!!!!!!!!!?????????????????`);
//     response.send(JSON.stringify(movies)).end();
//   }
// });

app.get('/movies', async (request, response) => {

  if (request) {
    response.send(JSON.stringify(movies)).end();
  }
});

const server = http.createServer(app);

const port = process.env.PORT || 7070;

const bootstrap = async () => {
  try {
    server.listen(port, () =>
      logger.info(`Server has been started on http://localhost:${port}`)
    );
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

bootstrap();
