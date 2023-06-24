import { type } from "os";

// 声明变量使用联合类型
let phone:number | string= '0123-257877877';
// 函数也可以使用
let checkNum = function (type:number | boolean):boolean{
    return !!type
}
let result = checkNum(true)
console.log(result);
//交叉类型
interface People {
    name:string,
    age:number
}
interface Man {
    sex:number
}
const evanzhe = function (man:People & Man):void {
    console.log(man);
};
evanzhe({
    name:'johnwick',
    age:20,
    sex:1
})
// 断言函数
let checkFn = function (num:number | string):void {
    // 类型断言
    console.log((num as string).length);
}
checkFn(123456);
interface D {
    run:string
}
interface C {
    build:string
}
// <A>type 
let fn3 = (type: C | D):void => {
        //推断成 D类型 
        console.log((type as D).run)
}
fn3({
    build:'123'
});
// 临时断言
// (window as any).abc = 123
const fn = (type:any):boolean => {
    // 欺骗ts解析器
    return type as boolean
}
console.log(fn(1));