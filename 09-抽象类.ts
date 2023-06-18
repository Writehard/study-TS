//基类 抽象类
//abstract 所定义的方法 都只能描述不能进行实现 
//抽象类
//无法创建实例
abstract class Ang {
    name:string
    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name
    }
    abstract init(name:string):void

}
// 派生类
class React extends Ang {
    constructor(){
        super('')
    }
    init(name: string): void {
    }
    setName(name:string){
        this.name = name;
    }
}
const react = new React()
react.setName('evanzhe喜欢美女')
console.log(react.getName());
