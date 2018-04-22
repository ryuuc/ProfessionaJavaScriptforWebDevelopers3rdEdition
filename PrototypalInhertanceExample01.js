var person ={
    name:"Nick",
    friends:["Shely","Court"]
};
var anotherPerson = Object.create(person);
anotherPerson.name ="Greg";
anotherPerson.friends.push("Bob");

var yetAnotherPerson = Object(person);
 yetAnotherPerson.name = "Linda";
 yetAnotherPerson.friends.push("Tim");

console.log(person.friends); // ["Shely", "Court", "Bob", "Tim"]
console.log(anotherPerson.friends);// ["Shely", "Court", "Bob", "Tim"]
console.log(yetAnotherPerson.friends);// ["Shely", "Court", "Bob", "Tim"]



//寄生式继承（parasitic）
function createAnother(original){
    var clone = object(original);
    clone.sayHi = function(){
        console.log("Hi");
    }
    return clone;
}

var person2 = {
    name:"Nick",
    friends:["Shelby","Court"]
};
var anotherPerson = createAnotherPerson(person2);
anotherPerson.sayHi();

//寄生组合式继承
function inheritPrototype(subType,superType){
    var prototype = Object(superType.prototype);
    prototype.constructor= subType;
    subType.prototype = prototype;
}