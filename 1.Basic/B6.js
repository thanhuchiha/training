//Shallow clone
const obj1 = {a: 1, b: 2, c: {d: 4}};
const obj1Clone = {...obj1};
obj1.c.d = 10;//Sẽ thay đổi giá trị trong obj được clone.
console.log('obj1: ', obj1);
console.log('objClone: ', obj1Clone);

//Deep clone
const obj2 = {a: 2, b: 3, c: {d: 5}};
const obj2Clone = JSON.parse(JSON.stringify(obj2));
obj2.c.d = 10;// Sẽ không thay đổi giá trị trong obj được clone.
console.log('obj2: ', obj2);
console.log('obj2Clone: ', obj2Clone);