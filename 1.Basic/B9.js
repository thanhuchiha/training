//3 sự kiện bất đồng bộ không biết trước thời gian hoàn thành. Giả sử có 2 sự kiện thành công, 1 sự kiện thất bại. Làm thế nào để thực hiện 3 sự kiện cùng lúc,
//Kết quả nhận được sẽ trả 1 array chứa 3 kết quả thành công hoặc thất bại.
//Chỉ sử dụng promise.All()

//Sẽ có 2 cách xử lý:
//Cách 1: Handle error của event và resolve về data error. Việc này sẽ không làm dừng Promise khác với việc chúng ta reject luôn error trong catch().
//Cách 2: Sử dụng Promise.allSettled() thay cho Promise.all()
const event1WithResolve = () => {
    const array = new Array(2);
    return new Promise(resolve => {
        setTimeout(() => {
            array[0] = { data: 1 };
            resolve(array);
        }, 2000);
    });
}

const event2WithResolve = () => {
    const array = new Array(2);
    return new Promise(resolve => {
        setTimeout(() => {
            array[0] = { data: 2 };
            resolve(array);
        }, 2000);
    });
}

const event3WithReject = () => {
    const array = new Array(2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const promise1 = Promise.reject(new Error('EVENT3 ERROR'));
            promise1.then(result => {
                array[0] = { data: result };
            }).catch((error) => {
                array[1] = { error: error.message }
            }).then(() => {
                resolve(array);
            });
        }, 1000)
    });
}

const parallel = async () => {
    console.time('parallel promise');
    await Promise.all([event1WithResolve(), event2WithResolve(), event3WithReject()])
        .then(([value1, value2, value3]) => {
            console.log('EVENT1: ', value1);
            console.log('EVENT2: ', value2);
            console.log('EVENT3: ', value3);
        })
    console.timeEnd('parallel promise');
}
parallel()