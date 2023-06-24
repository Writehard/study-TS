//鸭子类型
//主类型
interface J {
    name:string
    age:number
}
//子类型
interface W {
    name:string
    age:number
    sex:string
}
let e:J = {
    name:"老莫我想吃鱼了",
    age:33
}
let f:W = {
    name:"高启强",
    age:33,
    sex:"男"
}

//协作
e = f
//逆变
const fna = (params:J) =>{};
const fnb = (params:W) =>{};

//一定是安全的
// fnb = fna

// fna = fnb