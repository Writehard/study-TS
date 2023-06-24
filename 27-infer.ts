
// 定义一个类型
// type TYPE<T> = T extends Array<infer U>? U : T

// type Z = TYPE<(string | number)[]>

// type V = TYPE<boolean>

// type L = [string,number]

// type unin = TYPE<L>
//infer 类型提取
type ArrZ = ['a', 'b', 'c']
type First<T extends any[]> = T extends [infer one]? one: []

type aaaa = First<ArrZ>