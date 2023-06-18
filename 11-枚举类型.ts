// const fn3 = (type:string) =>{
//     if(type === 'green'){
//         return 0
//     }
//     if(type === 'red'){
//         return 1
//     }
//     if(type ==='blue'){
//         return 2
//     }
// }
// let color = {
//     red:0,
//     green:1,
//     blue:2
// }
//1- 枚举类型 - 普通类型
// enum Color {
//     red,
//     green,
//     blue
// }
// 增长枚举类型  自定义
// 设置初始值
// enum Color {
//     red = 1,
//     green = 7,
//     blue = 8
// }

// 2-字符串枚举
// enum Color {
//     red = 'red',
//     green = 'green',
//     blue = 'blue'
// }
// 3-异构枚举 数字 + 字符串
// enum Peoson {
//     yes=1,
//     no="no",

// }
//4- enum搭配 interface
// interface Enum {
//     red:Peoson.yes
// }
// let enumObj:Enum= {
//     red:Peoson.yes,
// }
//5-const 影响编译 
// const enum Types {
//     succes,
//     fail
// }
// let code:number = 0
// if(code === Types.succes){

// }
// console.log(Color.red);
// console.log(Color.green);
// console.log(Color.blue);
// console.log(Peoson.yes);
// console.log(Peoson.no);
// 6-反向映射
enum Types {
    succes,
    fail ='str'
}
let succes:number = Types.succes

let key = Types[succes]
console.log(`key=>>>${key}`,`value==>${succes}`);


