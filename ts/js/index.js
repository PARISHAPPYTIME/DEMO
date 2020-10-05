"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getInfo(data) {
    if (typeof data === 'string') {
        return '我叫' + data;
    }
    else {
        return '我的年龄有' + data;
    }
}
console.log(getInfo("虚汗青"));
console.log(getInfo(85));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log("父类方法 RUN：", this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var person = new Person("烟熏三文鱼");
person.run();
person.setName("这是我的新名字");
console.log(person.getName());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    return Man;
}(Person));
var m = new Man("Man name");
m.run();
console.log("----------------");
var str = 'can you speak english';
var count = 2123456;
var fn = function () {
    return "你知道吗";
};
var fn2 = function () {
    console.log("这个方法没有任何的返回值");
};
var getValue = function (username, password, age) {
    console.log(username + " ==== " + password);
    return '你去定吗';
};
var getArr = function () {
    var resuler = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        resuler[_i] = arguments[_i];
    }
    return resuler;
};
getValue('123', 78978);
console.log(getArr(1, 2, 3, 4, 5, 6, 7, 8, 9));
var a = fn();
var value = "这是个不会改变的值";
console.log(a);
var add = ['你一0', 'canyou'];
console.log(add);
var arr = [1, 5, 8];
// 元组类型
var arr2 = ['这是个string', 5, true];
var State;
(function (State) {
    State[State["success"] = 200] = "success";
    State[State["error"] = 500] = "error";
    State["other"] = "\u53E6\u5916\u7684\u51E0\u79CD\u60C5\u51B5";
})(State || (State = {}));
console.log(State.success);
var Color;
(function (Color) {
    Color[Color["orange"] = 0] = "orange";
    Color[Color["blue"] = 8] = "blue";
    Color[Color["red"] = 9] = "red";
})(Color || (Color = {}));
console.log(Color.blue);
console.log(Color.red);
var box = document.querySelector('#box');
box.style.color = 'red';
var n;
console.log(n);
var err;
err = (function () {
    throw new Error("这里发生了错误");
})();
