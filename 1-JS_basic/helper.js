const waitBlocking = (miliseconds) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliseconds);
}

const waitNonBlocking = (miliseconds) => {
    return new Promise(resolve => setTimeout(() => resolve(), miliseconds));
}

export default { waitBlocking, waitNonBlocking };