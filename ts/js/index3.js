"use strict";
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
var ConfigType;
(function (ConfigType) {
    ConfigType["post"] = "post";
    ConfigType["get"] = "get";
})(ConfigType || (ConfigType = {}));
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("网络请求成功");
            if (config.dataType === 'json') {
                JSON.parse(xhr.responseText);
            }
            console.log(xhr.responseText);
        }
    };
}
var md5 = function (key, value) {
    return key + value;
};
var arrType = [8, 9, 6, 8, 5, 8, 6, 9];
console.log(arrType);
var newObj = {
    name: "胡汉三",
    age: 'dagygasd'
};
console.log(md5('name', '张三'));
var MyUserClass = /** @class */ (function () {
    function MyUserClass(name) {
        this.name = name;
    }
    MyUserClass.prototype.eat = function (name) {
        console.log("我爱吃东西");
    };
    return MyUserClass;
}());
