// 泛型
//动态类型
function evanzhe<T>(a: T, b: T): Array<T> {
    return [a, b];
}

evanzhe("sert", "sdsd");
evanzhe(true, false);
evanzhe(1, 2);
// type
// type A<T> = string | number | T

// let a:A<string> = 'evad'
interface Data<T> {
    msg: T;
}

function add<T, K>(a: T, b: K): Array<T | K> {
    return [a, b];
}
add(1, "str");
// 泛型约束 extends
function sayHi<T extends number>(a: T, b: T) {
    return a + b;
}
interface Leng {
    length: number;
}
function sayL<T extends Leng>(s: T) {
    return s.length;
}
let result = sayL([1, 2, 3]);

let zhe = {
    name: "evan",
    sex: "man",
};
// keyof 约束对象的属性
type keys = keyof typeof zhe;
function ob<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let result2 = ob(zhe, "sex");

//高级用法
interface Datas {
    name: string;
    age: number;
    sex: string;
}
type Option<T extends object> = {
    [key in keyof T]: T[key];
};
type B = Option<Datas>;
