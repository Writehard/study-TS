
//对象的混入mixin 
interface Name {
    name:string
}

interface Age {
    age:number
}

interface Sex {
    sex:number
}

let wick:Name = {
    name:'evan'
}
let wickAge:Age = {
    age:20
}

let wickSex:Sex = {
    sex:1
}
let Obj = Object.assign(wick,wickSex,wickAge);
//合并类
class Bar {
    type:boolean
    changType() {
        this.type = !this.type
    }
}
class Foo {
    name:string
    getName():string {
        return this.name
    }
}
class Baz implements Bar,Foo {
    type: boolean = false
    name: string = 'wick'
    changType:()=>void
    getName:()=> string 
}
mixins(Baz,[Bar, Foo])
function mixins (curCls:any,itemCls:any[]){
    itemCls.forEach((item) => {
        Object.getOwnPropertyNames(item.prtotype).forEach(name=> {
            curCls.prtotype[name] = item.prtotype[name]
        })
    })
}
let ccc = new Baz()
console.log(ccc.name);

ccc.changType()