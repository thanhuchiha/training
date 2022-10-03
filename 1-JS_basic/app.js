const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

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


const controller = http.createServer((req, res) => {
  // const start = new Date().getTime();
  // doA();
  // await doB();
  // res.end();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


controller.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Thời gian nhận được phản hồi từ request đầu tiên là 11s . request cuối cùng là 29s, thời gian trung bình của 3 request là 20s