function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

var anotherFactorial = factorial;
factorial = null;
// console.log(anotherFactorial(4)); //error


function factorial1(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1); //严格模式无效
    }
}

var anotherFactorial1 = factorial1;
factorial1 = null;
console.log(anotherFactorial1(4)); 


//使用命名函数表达式
var factorial2 = (function f(num){
    if(num<=1){
        return 1;
    }else{
        return num * f(num-1);
    }
});

var anotherFactorial2 = factorial2;
factorial2 = null;
console.log(anotherFactorial2(4)); 