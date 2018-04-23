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

var descriptor = Object.getOwnPropertyDescriptor(Person2.prototype, "constructor");
console.log(descriptor.enumerable); //true

function Person3() { }
Person3.prototype = {
    name: "Nick",
    age: 22,
    job: "Pro",
    sayName: function () {
        console.log(this.name);
    }
};
//重设构造函数
Object.defineProperty(Person3.prototype, "constructor", {
    enumerable: false,
    value: Person3
})

var descriptor3 = Object.getOwnPropertyDescriptor(Person3.prototype, "constructor");
console.log(descriptor3.enumerable); //false

//原型的动态性
var friend3 = new Person3();
Person3.prototype.sayHi = function () {
    console.log("hi");
}
friend3.sayHi();


//重写原型
function Person4() { }
var friend4 = new Person4();
Person4.prototype = {
    constructor: Person4,
    name: "Nick",
    sayName: function () {
        console.log(this.name);
    }
}
//friend4.sayName(); //TypeError: friend4.sayName is not a function

console.log(typeof Array.prototype.sort);
console.log(typeof String.prototype.substring);

//基本包装类型添加方法
String.prototype.startWith = function (text) {
    return this.indexOf(text) == 0;
}
var msg = "Hello world";
console.log(msg.startWith("Hello"));

//原型对象的问题，共享本质,导致所有实例公用一个引用类型
function Person5() { }
Person5.prototype = {
    constructor: Person5,
    name: "Nick",
    age: 29,
    friends: ["Shelby", "Court"]
};
var person6 = new Person5();
var person7 = new Person5();
person6.friends.push("vans");
console.log(person6.friends);//Array(3) ["Shelby", "Court", "vans"]
console.log(person7.friends);//Array(3) ["Shelby", "Court", "vans"]
console.log(person6.friends === person7.friends); //true


//组合使用构造函数模式和原型模式
function Person7(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person7.prototype = {
    constructor: Person7,
    sayName: function () {
        console.log(this.name);
    }
}

var person8 = new Person7("Nick", 22, "ssw");
var person9 = new Person7("Greg", 25, "ssb");
person8.friends.push("vans");
console.log(person8.friends);//Array(3) ["Shelby", "Court", "vans"]
console.log(person9.friends);//Array(3) ["Shelby", "Court"]
console.log(person8.friends === person9.friends); //false
console.log(person8.sayName === person9.sayName);//true

//动态原型模式
function Person10(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != "function") {
        Person10.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}




