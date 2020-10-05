

function Person (){
    this.name = "username"
    this.age = 18
    this.getname = () => {
        console.log(this.name)
    }
}

Person.getage = function() {
    console.log(this)
}
Person.prototype.getage2 = function(){
    console.log(this.name)
}
var p = new Person()
p.name = "这是修改之后的名字 usename"
p.getname()
Person.getage()
p.getage2()

function Father(){
    Person.call(this)
}

let f = new Father()
f.getname()