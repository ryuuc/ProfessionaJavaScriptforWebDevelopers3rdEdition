function Person(){
}

Person.prototype.name = "Nick";
Person.prototype.age = 29;
Person.prototype.job ="SE";
Person.prototype.sayName =function(){
    console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName == person2.sayName); 

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.getPrototypeOf(person2) == Person.prototype);
console.log(Object.getPrototypeOf(person1).name);

console.log(person1.hasOwnProperty("name")); //false
console.log("name" in person1); //true

person1.name = "Nick222";

console.log("name" in person1); //true
console.log(person1.hasOwnProperty("name")); //true

console.log(person1.name); 
console.log(person2.name); 

delete person1.name; //删除实例属性
console.log(person1.hasOwnProperty("name"));//false
console.log(person1.name);

//原型非实例判断
function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object);
}




