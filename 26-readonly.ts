import { type } from "os";
//
type R<T> = {
    readonly [P in keyof T]: T[P];
};
type EVAN =  {
    name:string,
    age:number,
    text:string
}
// type man = R<EVAN>
// Record 来约束key 和 value
type Rec<K extends keyof any, T> = {
    [P in K]: T;
};
type key = string | number | symbol

type K = 1 | 2 | 3

type B = Rec<K,EVAN>


let zoz:B = {
    1:{name:'EVAN',age:19,text:'s'},
    2:{name:'EVAN',age:19,text:'s'},
    3:{name:'EVAN',age:19,text:'s'}
}