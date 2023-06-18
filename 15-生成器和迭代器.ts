// 1-生成器 用法一样
function* gen () {
    yield Promise.resolve('evanzhe') //同步 异步
    yield 'evan'
    yield 'samllevan'
    yield 'bigevan'
};

const man = gen()
console.log(man);
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
// 2.迭代器
// 3.set map 
let set:Set<string> = new Set(['str','str']) //天然去重 - 数字 和 字符串 
console.log(set);
let map:Map<any, any> = new Map();
let Arr5 = [1,2,3]
map.set(Arr5,'evan')
// map key value 形式 并且支持 引用类型作为key 
console.log(map.get(Arr5));

function args () {
    console.log(arguments);
    
}
//4-迭代器
// const each = (value:any) => {
//     let It:any = value[Symbol.iterator]()
//     let next:any = { done:false }
//     while (!next.done){
//         next = It.next()
//         if(!next.done){
//         console.log(next.value);
//         }        
//     }
// }
// each(set)
//5-迭代器的语法糖 for of
//6- for of 对象不能用[Symbol.iterator]
// 7-解构 底层原理也是调用 iterator
// 8-对象支持 for of 
let obj8 = {
    max:5,
    current:0,
    [Symbol.iterator](){
        return {
            max: this.max,
            current:this.current,
            next(){
                if(this.current === this.max){
                    return {
                        value:undefined,
                        done:true
                    }
                }else {
                    return {
                        value:this.current++,
                        done:false
                    }
                }
            }
        }
    }
}

for(let value of obj8){
    console.log(value);
    
}