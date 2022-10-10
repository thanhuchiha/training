const  a = () => {console.log('a');}
const b = () => {console.log('b');}

const main = () => {
    //setImmediate() đẩy hàm callback lên đầu job queue.
    setImmediate(b);
    //process.nextTick() khi gọi process.nextTick() thì thằng này sẽ được lập lịch tại nextTickQueue và event loop sẽ thực thi chúng từng cái 1 cho đến khi không còn cái nào.
    //Nó không phân biệt là đang ở giai đoạn nào của eventloop
    process.nextTick(a);
}

main();

//Lỗi Zalgo xảy ra khi lập trình viên trộn lẫn giữa callback đồng bộ và callback bất đồng bộ trong control flow.Việc này gây cho các event khó dễ đoán được thứ tự thực thi.
//Cách xử lý: Dùng process.nextTick(funcA) khi này funcA sẽ vào cuối event queue của NodeJS. Nếu ko có nextTick() thì callback bất đồng bộ sẽ chen ngang event queue của NodeJS, nếu có
// thì chúng ta sẽ lập lịch cho nó vào cuối hàng đợi.
//Example:
function getData(useCache, callback) {
    var fun = " Hello World";
    if (useCache) {
        process.nextTick(function(){
            callback('cached data' + fun);
        });
    } else {
        setTimeout(function(){
            callback('loaded data' + fun);
        }, 1000);

    }
}

console.log("Do task A");
getData(false, function(data){
    processData(data);
});
console.log("Do task C");

function processData(data) {
    console.log('processData', data);
}