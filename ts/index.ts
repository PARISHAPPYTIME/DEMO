
function getInfo (data:string):string;
function getInfo (data:number):number;
function getInfo (data:any):any{
    if(typeof data === 'string'){
        return '我叫' + data
    }else{
        return '我的年龄有' + data
    }
}
console.log(getInfo("虚汗青"))
console.log(getInfo(85))

class Person {
    name:string; // 属性前面省略了 public 关键词
    constructor(name:string) {
        this.name = name
    }
    run():void{
        console.log("父类方法 RUN：", this.name)
    }
    getName():string {
        return this.name
    }
    setName(name:string):void {
        this.name = name
    }
}

let person = new Person("烟熏三文鱼")
person.run()
person.setName("这是我的新名字")
console.log(person.getName())

class Man extends Person{
    constructor(name:string){
        super(name)
    }
}

let m = new Man("Man name")
m.run()



console.log("----------------")

var str:string = 'can you speak english'

var count:number = 2123456

let fn = ():string => {
    return "你知道吗"
}

let fn2 = ():void => {
    console.log("这个方法没有任何的返回值")
}

let getValue = (username:string, password:number, age?:number):string => {
    console.log(`${username} ==== ${password}`)
    return '你去定吗'
}


let getArr = (...resuler:number[]):Array<number> => {
    return resuler
}
getValue('123', 78978)
console.log(getArr(1, 2, 3, 4, 5, 6, 7, 8, 9))

let a:string = fn()

const value:string = "这是个不会改变的值"
console.log(a)

let add:string[] = ['你一0', 'canyou']
console.log(add)
let arr:Array<number> = [1, 5, 8]

// 元组类型
let arr2:[string, number, boolean] = ['这是个string', 5, true]

enum State {
    success = 200,
    error = 500,
    other = "另外的几种情况"
}

console.log(State.success)

enum Color {
    orange,
    blue = 8,
    red
}

console.log(Color.blue)
console.log(Color.red)

const box:any = document.querySelector('#box')
box.style.color = 'red'

let n:number | undefined
console.log(n)

let err:never;

err = (() =>{
    throw new Error("这里发生了错误")
})()