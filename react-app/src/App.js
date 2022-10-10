import './App.css';
import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Call API')
  const [message4, setMessage4] = useState('Call API')
  const [message7, setMessage7] = useState('Call API')
  
  const callAPI = (url, startTime, callback) => {
    axios.get(url).
      then((result) => {
        console.log(result);
        if (result.status === 200) {
          callback(performance.now() - startTime);
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  const handleCallAPI3 = () => {
    if (message === 'Processcing') {
      return;
    }
    setMessage('Processcing');
    const startTime = performance.now();
    const url = 'http://localhost:3001/';
    callAPI(url, startTime, (result) => {
      console.log("REQUEST 1: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST 2: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST 3: ", result);
      setMessage('DONE');
    });
  }

  const handleCallAPI4 = () => {
    if (message4 === 'Processcing') {
      return;
    }
    setMessage4('Processcing');
    request1()
    request2()
  }

  const request1 = () => {
    const url = 'http://localhost:3001/get1';
    const startTime = performance.now();
    callAPI(url, startTime, (result) => {
      console.log("REQUEST1 1: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST1 2: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST1 3: ", result);
      setMessage4('DONE');
    });
  }
  const request2 = () => {
    const url = 'http://localhost:3001/get2';
    const startTime = performance.now();
    callAPI(url, startTime, (result) => {
      console.log("REQUEST2 1: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST2 2: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST2 3: ", result);
      setMessage4('DONE');
    });
  }

  const handleCallAPI7 = () => {
    if (message7 === 'Processcing') {
      return;
    }
    setMessage7('Processcing');
    const url = 'http://localhost:3001/get7';
    const startTime = performance.now();
    callAPI(url, startTime, (result) => {
      console.log("REQUEST1 1: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST1 2: ", result);
    });
    callAPI(url, startTime, (result) => {
      console.log("REQUEST1 3: ", result);
      setMessage7('DONE');
    });
  }


  return (
    <div className="App">
      <button style={{ marginRight: 20 }} onClick={handleCallAPI3}>Bai 3: {message}</button>
      <button style={{ marginRight: 20 }} onClick={handleCallAPI4}>Bai 4: {message4}</button>
      <button style={{ marginRight: 20 }} onClick={handleCallAPI7}>Bai 7: {message7}</button>
    </div>
  );
}

export default App;
