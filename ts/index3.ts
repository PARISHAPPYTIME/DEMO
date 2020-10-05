// interface label {
//     firstName:string;
//     secondName:string;
// }

// function printLabel(name:label){
//     return name.firstName + name.secondName
// }

// console.log(printLabel({
//     firstName: '我',
//     secondName: "爱你"
// }))
enum ConfigType {
    post = "post",
    get = "get"
}

interface Config {
    url:string;
    type:ConfigType;
    data?:string;
    dataType:string;
}

function ajax(config:Config):void{
    let xhr = new XMLHttpRequest();
    xhr.open(config.type    , config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("网络请求成功")
            if(config.dataType === 'json'){
                JSON.parse(xhr.responseText)
            }
            console.log(xhr.responseText)
        }
    }
}

// ajax({
//     type: ConfigType.get,
//     url: "http://a.itying.com/api/productlist",
//     data: "name=张三",
//     dataType: "json"
// })

interface encrypt {
    (key:string,value:string):string;
}
let md5:encrypt = function(key:string, value:string):string {
    return key + value
}
interface UserArr {
    [index:number]: number
}
let arrType:UserArr = [8,9,6,8,5,8,6,9]
console.log(arrType)
interface UserObj {
    [index:string]:string
}
let newObj:UserObj = {
    name: "胡汉三",
    age: 'dagygasd'
}
console.log(md5('name', '张三'))

interface UserClass {
    name: string;
    eat(str:string): void;
}
class MyUserClass implements UserClass {
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(name:string):void{
        console.log("我爱吃东西")
    }
}
