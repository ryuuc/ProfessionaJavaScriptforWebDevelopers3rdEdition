//原型链的问题
function Super1Type(){
    this.colors = ["red","blue","green"];
}
function Sub1Type(){}

Sub1Type.prototype  = new Super1Type();

var instance1 =new Sub1Type();
instance1.colors.push("black");
console.log(instance1.colors); // ["red", "blue", "green", "black"]

var instance2 =new Super1Type(); 
console.log(instance2.colors); //Array(3) ["red", "blue", "green"]

var instance3 =new Sub1Type();
console.log(instance3.colors);// ["red", "blue", "green", "black"]

