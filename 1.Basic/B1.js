setTimeout(() => {
    //This func added to queue
    console.log('hello event loop');
}, 5000);//Executed after 5s
//Just code below the settimeout function so that the callback in setimeout is executed after 5s.