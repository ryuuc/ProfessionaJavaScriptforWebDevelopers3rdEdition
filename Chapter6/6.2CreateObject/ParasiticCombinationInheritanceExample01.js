//寄生组合式继承，最理想
function inheritPrototype(subType,superType){
    var prototype = Object(superType.prototype);//创建对象
    prototype.constructor= subType; //增强对象
    subType.prototype = prototype; //指定对象
}

function SuperType(name){
    this.name =name;
    this.colors = ["red","blue"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name,age){
    SuperType.call(this,name);

    this.age = age;
}

inheritPrototype(SubType,SuperType);

SubType.prototype.sayAge =function(){
    console.log(this.age);
};

