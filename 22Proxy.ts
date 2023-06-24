let person = {
    name:'evan',
    age:19
}
let personProxy = new Proxy(person,{
    //取值
    get (target,key, receiver){
        if(target.age<18){
            return Reflect.get(target, key, receiver)
        }else{
            return "成年了"
        }
    }
})
let cat = {
    name:'tom',
    age:20
}
console.log(Reflect);
//观察者模式