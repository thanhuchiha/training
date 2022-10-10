const waitAndMaybeReject = async () => {
    const isOne = Math.round(Math.random());
    await new Promise((r) => setTimeout(r, 1000));

    if(isOne) return 1;//1 return, 0 throw
    throw Error('This is error!');
}
//test1() đúng. 
const test1 = async() => {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        return 'Oh no!';
    }
}

//test2() này về cú pháp thì đúng. Nhưng nếu function gọi test2() không sử dụng try catch để bắt throw(error) thì chương trình sẽ bị dừng.
const test2 = async () => {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        throw(error);
    }
}

//test3() này bị dư async await. Vì thực tế thì main() gọi nói đã có await. Ở đây chỉ cần return waitAndMaybeReject(); - Nó là 1 promise và ở main await test3() là OKE
const test3 = async() => {
    return await waitAndMaybeReject();
}

//test4() đúng
const test4 = () => {
    return waitAndMaybeReject();
}

const main = async() => {
    //Trên thực tế nếu sử dụng test2(), test3(), test4() thì main() cần handle thêm try/catch để xử lý nếu những function được gọi throw ra error.
    const value = await test4();
    console.log('value: ', value)
}

main();