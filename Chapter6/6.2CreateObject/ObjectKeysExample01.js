function Person(){
}

Person.prototype.name = "Nick";
Person.prototype.age = 29;
Person.prototype.job ="SE";
Person.prototype.sayName =function(){
    console.log(this.name);
};

var keys = Object.keys(Person.prototype);
console.log(keys); //Array(4) ["name", "age", "job", "sayName"]

var person1 = new Person();
person1.name = "Rob";
person1.age = 22;
var person1Keys = Object.keys(person1);
console.log(person1Keys); //Array(2) ["name", "age"]

var allKeys =Object.getOwnPropertyNames(Person.prototype);
console.log(allKeys);