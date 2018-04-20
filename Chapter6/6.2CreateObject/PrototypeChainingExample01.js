function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subproperty =false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var instance =new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());

// 实现继承的主要方法是原型链：利用原型链让一个引用类型继承另一个引用类型的属性和方法

// 构造函数、原型和实例的关系：
//     每个构造函数都有一个原型对象，
//     原型对象包含一个指向构造函数的指针，
//     而实例都包含一个指向原型对象的内部指针。
