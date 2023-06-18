// // 1-函数定义类型和返回值 - 箭头函数和返回值
// //2-默认参数 - num1:number = 10  可选参数 num2?:number 不能使用默认值
// //3-传递对象 使用 interface
// interface User {
//     name:string,
//     age:number
// }
// function add (num1:number = 10, num2?:number):number{
//     return num1 + num2
// }
// function add (user:User):User{
//     return user
// }
// const add = (num1:number, num2:number):number => {
//     return num1 + num2
// }
// console.log(add({name:'evanzhe',age:20}));
// //4-函数的this类型
// interface Obj {
//     user:number[],
//     add:(this:Obj,num:number)=> void
// }
// // 4-this类型ts 可以定义this的类型 ，必须在第一个参数定义this的类型
// let obj:Obj= {
//     user:[1,2,3],
//     add(this:Obj,num:number){
//         this.user.push(num)
//     }
// }
// obj.add(4)
// console.log(obj);
// // 5-函数重载
// let user:number[] = [1,2,3]
// // 函数重载 没有实体
// function findNum(add:number[]):number[] //如果传递的是一个number类型的数组那就做添加
// function findNum(id:number):number[] //如果传入 id进行单个查询
// function findNum():number[] // 如果没传，返回整个数组
// // 实现函数
// function findNum(ids?:number | number[]):number[] {
//     if(typeof ids == 'number'){
//         return user.filter(v => v == ids)
//     }else if(Array.isArray(ids)){
//         user.push(...ids)
//         return user
//     }else {
//         return user
//     }
// }
// console.log(findNum([4,5,6]));
