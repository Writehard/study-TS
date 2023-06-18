
let Tarr = []
let tstr
tstr = 456
//天然类型推断
//类型别名 - type
//同名不会合并

type s = number[]
let dstr:s = [1]
//高级用法
//extends 包含的意思
//左边的值 会作为右边类型的子类型
//top any unknow
// Object
// Number
//number string
//never
type num = 1 extends never? 1 : 0;

