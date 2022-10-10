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

export const process3 = async () => {
    doA();
    await doB();
}
