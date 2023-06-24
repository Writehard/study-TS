//定义数组
// 第一种
let arr:number[] = [1,2,3,4,5];
let arr2:string[] = ['s','m','rabbit'];
let arr3:boolean[] = [true, false,];
//第二种方式  泛型
let arr4:Array<Boolean> = [true,false];
// 定义对象数组需要使用interface
interface X {
    name:string,
    age?:number
}
let arr5:X[] = [
    {
        name:'wick',
        age:18
    },
    {
        name:'johnwick',
        age:20
    }
]
// 定义多维数组
let arr6:number[][] = [[1],[2],[3]]
// let arr7:[] = [] ?
//使用泛型 定义多维数组
let arr7:Array<Array<number>> = [[1],[2],[3]];
// 大杂烩
let arr8:any[] = ['str',123,true]
function fn2(...args:any[]) {
    console.log(arguments);
    let a:A = arguments
    console.log(a);
    
}
fn2(1, 2, 3)
interface A {
    callee:Function
    length:number
    [index:number]:any
}