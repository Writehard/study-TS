
type Person =  {
    name:string,
    age:number,
    text:string
}
// //keyof
// type key  = 'name' | 'age' | 'text'
// // P 就是其中一项
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
type p = Partial<Person>
// 把对象中的属性摘出来
type p = Pick<Person,'age'>
//T 
//person
// //keyof
// type key  = 'name' | 'age' | 'text'
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
let ages:p = {
    age:19
}
