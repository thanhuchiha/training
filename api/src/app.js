import express from 'express'
import cors from 'cors'
import { queue3 } from './helper/queues/service.queue';
// import { queue3 } from './helper/queues/service.queue';

const app = express()

app.use(cors())

const hostname = '127.0.0.1';
const port = 3001;

const waitBlocking = (miliseconds) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliseconds);
}

const waitNonBlocking = (miliseconds) => {
  return new Promise(resolve => setTimeout(() => resolve(), miliseconds));
}

const doA = () => {
  waitBlocking(10000);
}

const doB = async () => {
  await waitNonBlocking(1000);
}

// ---- Bai 3
app.get('/', cors(), async function (req, res, next) {
  //using job queues
  // doA();
  // await doB();
  await queue3(1);
  res.json({ msg: 'Hello Napa' })
});
// ----

// ---Bai 4
app.get('/get1', cors(), async function (req, res, next) {
  await doB();
  res.json({ msg: 'Hello Napa1' })
});
app.get('/get2', cors(), function (req, res, next) {
  doA();
  res.json({ msg: 'Hello Napa2' })
});
// -----

// ---Bai 7
const test = (array) => {
  new Promise(resolve => {
    array.map((item) => {
      console.log(item);
    })
    resolve();
  })
}
app.get('/get7', cors(), function (req, res, next) {
  const array = Array.from(Array(100000).keys())
  // array.forEach((item) => {
  //   console.log(item);
  // })

  Promise.all([test(array)])
  res.json({ msg: 'Hello Napa7' })
});
// -----

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
})