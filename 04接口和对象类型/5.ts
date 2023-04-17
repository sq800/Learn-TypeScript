//readonly属性 ，只读

interface Student5 {
    name: string;
    age: number;
    readonly id: string;
    readonly callBack: () => boolean;
}

let e: Student5 = {
    name: "sq",
    age: 18,
    id: "18170023728",
    callBack() {
        return true;
    }
}
//可以调用
e.callBack()

//不可以修改，报错
// e.callBack = () => false