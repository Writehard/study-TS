interface Axxxxx extends B {
    name:string
     age?:123
    [propName:string]:any
    // 不想让别人修改 readonly
    readonly cb:()=> boolean
}
// interface Axxxxx {
//     iKun:string
// }
let a:Axxxxx = {
    name:'evanzhe',
    iKun:'john wick',
    xxx:'dada',
    cb:()=>{
        return false
    }
}
// 失效了
// a.cb = () => {
//     return true
// }
console.log(a.cb());
//1-必须一摸一样   不能多属性 也不能少属性 属性要一样 interface 来约束 创建的对象
//2-遇到重名的interface 会发生重合
//3-任意key  [propName:string]:any
//4-可选操作符? 属性可读不可修改 readonly
//5-接口继承
//6-定义函数类型 
interface B {
    xxx:string
}
interface Fn {
    (name:string):boolean[]
}
const fn:Fn= () =>{
    return []
}
console.log(fn('s'));
