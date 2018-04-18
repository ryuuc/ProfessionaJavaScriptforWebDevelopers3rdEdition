function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}

var person1 = new Person("Nick",29,"SE");
var person2 = new Person("Greg",27,"Doctor");
person1.sayName();
person2.sayName();

console.log(person1.constructor == Person);
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);

//没有显式地创建对象
//直接将属性和方法赋给了this对象
//没有return语句

Person("Greg",24,"Teacher");
//window.sayName();

//在另一对象的作用域中调用
var oPerson = new Object();
Person.call(oPerson,"Kitsten",25,"Nurse");
oPerson.sayName();


console.log(person1.sayName == person2.sayName); //false


