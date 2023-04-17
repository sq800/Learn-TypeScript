// 索引签名
// 有不确定的属性时，可以使用这个功能。类型设置为any,否则对象的所有属性都是指定的类型
interface Student3 {
    name: string;
    age: number;
    [propertyName: string]: any  //约束属性名只能是string，属性值是any
}

let c: Student3 = {
    name: "sq",
    age: 18,
    ID: "18170023728",
    gender: "male"
}