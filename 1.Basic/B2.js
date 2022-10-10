//We have create a promise function and put any event in this function
const waitNonBlocking = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Waiting time ${time}`);
            resolve();
        }, time);
    });
}

const parallel = async () => {
    console.time('parallel promise');
    await Promise.all([
        waitNonBlocking(1000),
        waitNonBlocking(2000),
        waitNonBlocking(3000),
        waitNonBlocking(2000),
        waitNonBlocking(5000),
        waitNonBlocking(1000),
        waitNonBlocking(2000),
        waitNonBlocking(3000),
        waitNonBlocking(2000),
        waitNonBlocking(5000),
        waitNonBlocking(1000),
        waitNonBlocking(2000),
        waitNonBlocking(3000),
        waitNonBlocking(2000),
        waitNonBlocking(5000),
        waitNonBlocking(1000),
        waitNonBlocking(2000),
        waitNonBlocking(3000),
        waitNonBlocking(2000),
        waitNonBlocking(5000),
    ]).then(() => {
        console.log('DONE!!!');

    });
    console.timeEnd('parallel promise');
}
parallel();
