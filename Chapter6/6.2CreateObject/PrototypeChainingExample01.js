function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subproperty =false;
} 

//繼承了SuperType
SubType.prototype = new SuperType();

SubType.prototype ={
    getSubValue = function(){
        return this.subproperty;
    }
} //通过原型链实现继承时，不能使用对象字面量创建原型方法，因为这样会重写原型链

// SubType.prototype.getSubValue = function(){
//     return this.subproperty;
// };

// SubType.prototype.getSuperValue = function(){
//     return false;
// }

var instance =new SubType();
console.log(instance.getSuperValue()); //error
// console.log(instance.getSubValue());

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance)); //元原型鏈中出現過的原型，都可以説是該原型鏈所派生的原型

// 实现继承的主要方法是原型链：利用原型链让一个引用类型继承另一个引用类型的属性和方法
                                                                                                                                                                                                                           
// 构造函数、原型和实例的关系：
//     每个构造函数都有一个原型对象，
//     原型对象包含一个指向构造函数的指针，
//     而实例都包含一个指向原型对象的内部指针。
