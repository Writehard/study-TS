// 1. class 的基本用法 继承 和 类型约束 implements
// 2.class修饰符 readonly private protected public
// private 只能在内部使用 protected给子类和内部使用
//public 哪里都可以用
interface VueClass {
    options:Options
    init():void
}
interface Options {
    el:string | HTMLElement,
}
// 继承
interface Vnode {
    tag:string
    text?:string
    children?:Vnode[]
}
//虚拟dom 简单版
class Dom {
    // 创建节点的方法
    createElement(el:string) {
        return document.createElement(el)
    }
    // 填充文本的方法
    setText(el:HTMLElement, text:string | null){
        el.textContent = text
    }
    // 渲染函数
    reder(data:Vnode){
        let root = this.createElement(data.tag)
        if(data.children && Array.isArray(data.children)){
            data.children.forEach((item)=> {
                // 递归操作
                let child =  this.reder(item)
                root.appendChild(child)
            })
        }else {
            this.setText(root, data.text)
        }
        return root
    }
} 
class Vue extends Dom implements VueClass {
    options: Options
    constructor(options:Options){
        super()
        this.options = options
        this.init()
    }
    init(): void {
        // 虚拟dom 就是通过js 去渲染我们这个真实的dom
        let data:Vnode = {
            tag:'div',
            children:[
                {
                    tag:'section',
                    text:"我是子节点1"
                }, 
                {
                    tag:'section',
                    text:'我是子节点2'
                }
            ]
        }
        let app = typeof this.options.el == 'string'? document.querySelector(this.options.el):null
                app.appendChild(this.reder(data)) 
    }
    render(data:Vnode) { 
    }

}
new Vue({
    el:"#app"
})

