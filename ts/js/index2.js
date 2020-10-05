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
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.run = function () {
        console.log('在工作--------------' + this.name);
    };
    Father.prototype.getName = function () {
        return '在工作--------------' + this.name;
    };
    Father.prototype.setName = function (name) {
        this.name = name;
    };
    return Father;
}());
var father = new Father("Father name");
father.run();
father.setName("Father new name");
console.log(father.getName());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
    }
    Son.getChild = function () {
        return Son.sex;
    };
    Son.sex = '男';
    return Son;
}(Father));
var son = new Son("Son name");
son.run();
console.log(Son.getChild());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("吃的方法");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '狗粮';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '猫粮';
    };
    return Cat;
}(Animal));
var MyClass = /** @class */ (function () {
    function MyClass(name, eatWhat) {
        this.name = name;
        this.eatWhat = eatWhat;
    }
    return MyClass;
}());
var MySon = /** @class */ (function (_super) {
    __extends(MySon, _super);
    function MySon(name, eatWhat) {
        return _super.call(this, name, eatWhat) || this;
    }
    MySon.prototype.eat = function () {
        return this.name + "吃" + this.eatWhat;
    };
    return MySon;
}(MyClass));
var myson = new MySon("小花花", "猫粮");
console.log(myson.eat());
