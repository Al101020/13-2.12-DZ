import { randomUUID } from "node:crypto";
import http from "node:http";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import pino from "pino";
import pinoPretty from "pino-pretty";


const app = express();
const logger = pino(pinoPretty());

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


// const messages = ['messages!!!'];
const messages = [
  {
      "from": "anya@ivanova",
      "subject": "Hello from Anya",
      "time": "18:56 03.20.2019"
    },
    {
      "from": "alex@petrov",
      "subject": "Hello from Alex Petrov!",
      "time": "18:40 03.20.2019"
    }
];

app.post('/messages', async (request, response) => {

  if (request) {
    // logger.error(`!!!!!!!!!!!!!!!!!!?????????????????`);
    response.send(JSON.stringify(messages)).end();
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
