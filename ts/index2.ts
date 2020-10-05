class Father {
    private name:string; // 属性前面省略了 public 关键词
    constructor(name:string) {
        this.name = name
    }
    run():void{
        console.log('在工作--------------' + this.name)
    }
    getName():string {
        return '在工作--------------' + this.name
    }
    setName(name:string):void {
        this.name = name
    }
}

let father = new Father("Father name")
father.run()
father.setName("Father new name")
console.log(father.getName())

class Son extends Father{
    static sex:string = '男'
    constructor(name:string){
        super(name)
    }
    static getChild():string{
        return Son.sex
    }

}

let son= new Son("Son name")
son.run()
console.log(Son.getChild())


class Animal {
    name:string;
    constructor(name:string) {
        this.name = name
    }
    eat(){
        console.log("吃的方法")
    }
}

class Dog extends Animal {
    constructor(name:string) {
        super(name)
    }
    eat(){
        return this.name + '狗粮'
    }
}

class Cat extends Animal {
    constructor(name:string) {
        super(name)
    }
    eat(){
        return this.name + '猫粮'
    }
}

abstract class MyClass {
    name:string;
    eatWhat:string;
    constructor(name:string, eatWhat:string){
        this.name = name
        this.eatWhat = eatWhat
    }
    abstract eat():string;
}

class MySon extends MyClass {
    constructor(name:string, eatWhat:string){
        super(name, eatWhat)
    }
    eat():string{
        return this.name + "吃" + this.eatWhat
    }
}

interface PersonType {
    name:string;
}

let myson = new MySon("小花花", "猫粮")
console.log(myson.eat())