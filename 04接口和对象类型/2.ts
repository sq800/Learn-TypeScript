//重名的接口，属性会复合

//1.ts和2.ts有相同的interface，也会复合
interface Student2 {
    name: string;
    age: number
}

interface Student2 {
    gender: string
}

let b: Student2 = {
    name: "sq",
    age: 18,
    gender: "male"
}