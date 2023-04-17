// 定义函数类型

//约束函数的参数类型和返回值类型
interface Fn {
    (name: string): number[]
}

const fn: Fn = (name) => {
    return [1, 2]
}
// fn(200) //报错，参数类型错误

const fn1: Fn = function (name) {
    return [1, 2]
}
fn1("200") //参数类型正确
