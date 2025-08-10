// import { randomUUID } from "node:crypto";
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

// // ----------------------------------------
// - время и дата
    function addZero(num) {  
      if (num >= 0 && num <= 9) {  
        return '0' + num;  
      } else {  
        return num;  
      }  
    }

    function timeDate() {
      let timeDate = new Date();
      let year = timeDate.getFullYear();// год
      let month = timeDate.getMonth() + 1;// месяц
      let Day = timeDate.getDate();// число
      let hours = timeDate.getHours();// часы
      let minutes = timeDate.getMinutes();// минуты
      // let seconds = timeDate.getSeconds();// секунды
      // return addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + addZero(Day) + '.' + addZero(month) + '.' + year;
      return addZero(hours) + ':' + addZero(minutes) + ' ' + addZero(Day) + '.' + addZero(month) + '.' + year;
    }

    let num = 1;
    function hello() {
      
      return 'hello!!! - ' + (num += 1);
    }
    // -

function incomingAdd() {  // let timeDate = new Date();

  if (messages.length < 7) {
    try {
      const inc =   {
        'from': 'anya@ivanova',
        'subject': hello(),         // 'subject': 'Hello!!!!!!!!!!!',
        'time': timeDate()         // 'time': '19:00 03.20.2019'
      }
      messages.push(inc);
    } catch (err) {console.log(err)}
  } else if (messages.length > 5) {
    messages.splice(2, 2);
  }
}

// ---------
// setTimeout(incomingAdd, 3000);
setInterval(incomingAdd, 5000);
// // ----------------------------------------

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
