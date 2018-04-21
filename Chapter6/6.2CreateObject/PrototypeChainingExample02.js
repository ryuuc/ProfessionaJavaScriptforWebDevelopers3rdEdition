//原型链的问题
function Super1Type(){
    this.colors = ["red","blue","green"];
}
function Sub1Type(){}

// Sub1Type.prototype  = new Super1Type();

// var instance1 =new Sub1Type();
// instance1.colors.push("black");
// console.log(instance1.colors); // ["red", "blue", "green", "black"]

// var instance2 =new Super1Type(); 
// console.log(instance2.colors); //Array(3) ["red", "blue", "green"]

// var instance3 =new Sub1Type();
// console.log(instance3.colors);// ["red", "blue", "green", "black"]

function Sub2Type(){
    Super1Type.call(this); //借用构造函数（constructor stealing），有时候也称伪造对象或经典继承
}
//相对于原型链，借用构造函数有一个很大的优势，既可以在子类型构造函数中间向超类型构造函数传递参数

var instance4 =new Sub2Type();
instance4.colors.push("black");
console.log(instance4.colors); //["red", "blue", "green", "black"

var instance5= new Sub2Type();
console.log(instance5.colors);//["red", "blue", "green"]

//借用构造函数的问题：方法都在构造函数中定义，复用率低，

function Super3Type(name){
    this.name =name;
}

function Sub3Type (){
    Super3Type.call(this,"Nick");
    this.age = 29;
}

var instance33 =new Sub3Type();
console.log(instance33.name,instance33.age);
