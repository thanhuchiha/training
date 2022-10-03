//We have create a promise function and put any event in this function
const waitNonBlocking = (event, time) => {
    return new Promise(() => {
        setTimeout(event, time);
    });
}

const promise1 = () => {
    waitNonBlocking(() => { console.log('event 1') }, 1000);
    waitNonBlocking(() => { console.log('event 2') }, 2000)
    waitNonBlocking(() => { console.log('event 3') }, 3000)
    waitNonBlocking(() => { console.log('event 4') }, 2000)
    waitNonBlocking(() => { console.log('event 5') }, 5000)
}

const promise2 = () => {
    waitNonBlocking(() => { console.log('event 6') }, 1000);
    waitNonBlocking(() => { console.log('event 7') }, 2000)
    waitNonBlocking(() => { console.log('event 8') }, 3000)
    waitNonBlocking(() => { console.log('event 9') }, 2000)
    waitNonBlocking(() => { console.log('event 10') }, 5000)
}

const promise3 = () => {
    waitNonBlocking(() => { console.log('event 11') }, 1000);
    waitNonBlocking(() => { console.log('event 12') }, 2000)
    waitNonBlocking(() => { console.log('event 13') }, 3000)
    waitNonBlocking(() => { console.log('event 14') }, 2000)
    waitNonBlocking(() => { console.log('event 15') }, 5000)
}

const promise4 = () => {
    waitNonBlocking(() => { console.log('event 16') }, 1000);
    waitNonBlocking(() => { console.log('event 17') }, 2000)
    waitNonBlocking(() => { console.log('event 18') }, 3000)
    waitNonBlocking(() => { console.log('event 19') }, 2000)
    waitNonBlocking(() => { console.log('event 20'); console.timeEnd('Promise')}, 5000)
}

console.time('Promise')
promise1();
promise2();
promise3();
promise4();
