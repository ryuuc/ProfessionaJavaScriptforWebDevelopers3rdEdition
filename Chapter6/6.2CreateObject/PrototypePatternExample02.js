//更简单的原型语法
function Person() { }
Person.prototype = {
    name: "Nick",
    age: 44,
    job: "Pro",
    sayName: function () {
        console.log(this.name);
    }
}

var person1 = new Person();
console.log(person1.constructor instanceof Person); //false
console.log(person1.constructor instanceof Object);
var descriptor = Object.getOwnPropertyDescriptor(Person.prototype, "constructor");
console.log(descriptor.enumerable);

function Person2() { }
Person2.prototype = {
    constructor: Person, //重设constructor属性会导致Enumerable特性被设置为true，默认情况下，原生constructor熟悉不可枚举
    name: "Nick",
    age: 44,
    job: "Pro",
    sayName: function () {
        console.log(this.name);
    }
}

