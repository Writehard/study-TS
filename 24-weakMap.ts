//set 
let setA:Set<number> = new Set([1,2.3,4,6,4,5,6,7,8,9,1])//天然去重 引用类型除外
//添加
setA.add(10)
//删除
setA.delete(1)
//长度
let setLength = setA.size
//清空
setA.clear()
//for each  for of 
console.log(setA);
//map 
let dog = [1,2,3]
let mapA:Map<object,any> =  new Map()

mapA.set(dog,'小猫');
mapA.delete(dog)
console.log(mapA);
//weakmap weakset 弱项 弱引用 不会被记入垃圾回收策略
//weakmap map 的区别 weakmap 的key 只能是引用类型
let john:any = {name:'wick'} //1
let apph = john; //2 
const weakMaps:WeakMap<object,any> = new WeakMap()
weakMaps.set(apph,'saf')
console.log(weakMaps);//2  这里不会变成3 
apph = null; //-1
john = null;
console.log(weakMaps.get(john));


