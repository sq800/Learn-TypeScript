//不能多属性也不能少属性

interface Student {
    name: string,
    age: number
}

let a: Student = {
    name: "sq",
    age: 18,
    // cb() { //报红提示
    //     return true
    // },
}