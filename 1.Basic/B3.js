// import { waitBlocking, waitNonBlocking } from "./helper";
// const waitBlocking = (miliseconds) => {
//     const startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + miliseconds);
// }

// const waitNonBlocking = (miliseconds) => {
//     return new Promise(resolve => setTimeout(() => resolve(), miliseconds));
// }

// const doA = () => {
//     waitBlocking(10000);
// }

// const doB = async () => {
//     await waitNonBlocking(1000);
// }

// const controllerFunction = async (request) => {
//     console.time(request);
//     doA();
//     await doB();
//     console.timeEnd(request);
// }

// controllerFunction('request 1: ');
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

//Thời gian nhận request đầu tiên là 