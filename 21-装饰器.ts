//1-类装饰器
const Base: ClassDecorator = (target) => {
    // 返回的类构造函数
    //target 
    console.log(target);
    target.prototype.evanzhe = 'johnwick'
    target.prototype.fn = () => {
        console.log("我是帅锅");
    }
}
// @Base
class Http {

}
//浏览器不支持这种写法@Base
//第二种方法
Base(Http)
const http = new Http() as any
http.fn()
console.log(http.evanzhe);

//2-装饰器工厂 利用了函数柯理化
const Aase = (name:string) => {
    // 返回的类构造函数
    //target 
    const fn:ClassDecorator = (target) => {
        target.prototype.evanzhe = name
        target.prototype.fn = () => {
            console.log("我是帅锅");
        }
    }
    return fn

}
@Aase('evan')

class Ace {

}
const ace = new Ace() as any
console.log(ace.evanzhe);
