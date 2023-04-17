// 接口继承

//可以继承一个也可以继承多个
interface Student6 extends Person, Singer {
    name: string;
    age: number;
}

interface Person {
    gender: string;
}
interface Singer {
    cansing: boolean;
}

let f: Student6 = {
    name: "sq",
    age: 18,
    gender: "male",
    cansing: true
}