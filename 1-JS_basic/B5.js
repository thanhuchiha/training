
const array = [1, 4, 6, 7, 9, 3];

const callAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Call API done!')
        }, 300)
    })
}
const forFunc = () => {
    let count = 1;
    for (let index = 0; index < array.length; index++) {
        count++;
    }
    console.log("Count for: ", count);
}

const forEachFunc = (items) => {
    let count = 1;
    items.forEach(async () => {
        await callAPI();//Nếu comment dòng này thì count = 7. Vì forEach không chờ asynchonous process trong callback.
        count++;
    });
    console.log("Count forEach: ", count);
}

forEachFunc(array);
forFunc(array);