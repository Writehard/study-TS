let sym:symbol = Symbol(1) //唯一值
let sym2:symbol = Symbol(1) //唯一值
//for Symbol for全局symbol有没有注册过这个key 如果有直接拿来用 没有的话就去创建一个
// console.log(Symbol.for('EVAN') === Symbol.for('EVAN'));
// 解决对象的属性重名的一个用途
let obj = {
    name:1,
    [sym]:2,
    [sym2]:2
}
//for in 不能读到symbol
for (let key in obj){
    console.log(key);
    
}
// 也去取不到Object.keys
console.log(Object.keys(obj));
//  Object.getOwnPropertyNames也取不到symbol
console.log(Object.getOwnPropertyNames(obj));
// Object.getOwnPropertySymbols取不到name
console.log(Object.getOwnPropertySymbols(obj));
// 都可以取到的方法
console.log(Reflect.ownKeys(obj));
// [ 'name' ]
// [ 'name' ]
// [ Symbol(1), Symbol(1) ]
// [ 'name', Symbol(1), Symbol(1) ]




