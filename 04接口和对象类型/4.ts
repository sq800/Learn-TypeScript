// 可选属性，一个属性可以有，也可以没有

interface Student4 {
    name: string;
    age: number;
    gender?: string
}

let d: Student4 = {
    name: "sq",
    age: 18,
    gender: "male"
}

let d2: Student4 = {
    name: "sq",
    age: 18,
}