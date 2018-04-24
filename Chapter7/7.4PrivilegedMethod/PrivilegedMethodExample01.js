function Person(name){
    this.getName = function(){
        return name;
    };

    this.setName = function(value){
        name = value;
    }
}

var person = new Person("Nick");
console.log(person.getName());
person.setName("Greg");
console.log(person.getName());

//特权模式的缺点，必须使用构造函数来达到这个目的，而构造函数针对每个实例都会创建同样一组方法


(function(){
    var name="";
    //构造函数
    Person1  = function(value){
        name = value;
    };

    Person1.prototype.getName = function(){
        return name;
    };

    Person1.prototype.setName = function(value){
        name = value;
    };
})(); 

var person1 =new Person1("Nick");
console.log(person1.getName());
person1.setName("Greg");
console.log(person1.getName());
var person2 =new Person1("Michael");
console.log(person1.getName());
console.log(person2.getName());
