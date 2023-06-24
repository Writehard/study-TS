import { type } from "os";

// 联合类型数组
let Arr1: (number | boolean)[] = [1, true]
// 元组类型
let Arr2: [x:number, y?:boolean] = [1,true]
// 不能传入其他类型
// Arr1[0] = 'dada'
// push其他类型的值是不可以的
// Arr1.push(1)
console.log(Arr1);
let excel:[string, string, number][] = [ 
    ['evanzhe','man',18],
    ['evanzhe','man',18],
    ['evanzhe','man',18]
]
type first = typeof Arr2['length']

