function SuperType(name){
    this.name =  name;
    this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
};

function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}

SubType.prototype= new SuperType();
SubType.prototype.constructor = SubType();
SubType.prototype.sayAge= function(){
    console.log(this.age);
}

var instance1 =new SubType("Nick",29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 =new SubType("Greg",27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

//组合继承：指将原型链和借用构造函数组合，使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现实例属性的继承，
//既通过在原型上定义方法实现了函数的复用，又能保证每个实例都有它自己的属性