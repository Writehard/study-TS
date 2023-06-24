//string类型
let str:string = 'evanzhe'
// number类型
let num:number = 123;
// NaN
let noNum:number = NaN;
// 无穷大
let iNum:number = Infinity;
// 支持十进制
let tenNum:number = 6;
// 十六进制
let sixNum:number = 0xf00d;
// 二进制
let twoNum:number = 0b1010;
// 八进制
let eightNum:number = 0o744;

let resultStr:string = `${str}---${num}`
//布尔值
let bol:boolean = false;
//null
let n:null = null
//undefined
let u:undefined = undefined
//void
let v:void  = null
let v2:void = undefined
//void - 函数 -- null 和 undefinged
// function fn():void {
//     return 
// }
//穿插复制
// n = u

// u = n 
//any-任意类型 unknown 不知道类型
//1.顶层类型 any unknown
//2.Object
//3.Number String Boolean
//4.number string boolean
//5. 1   'evanzhe' flase
//6.never
//1-any 随便赋值
// let a:any = 1
// let b:number = 2
// b= a
// a= b
//2-unknown 只能赋值给自身 或者 any
// let a:unknown = 1
// let b:any = 5
// a = b
// b = a 
// unknown 没有办法读任何属性 方法也不可以调用
// let evan:unknown = {帅:true, open() => 123}
// evan.open()
//any可以调用方法的
// let evan:any = {帅:true, open:() => 123}
// console.log(evan.open());//123
//unknown比any类型更加安全


