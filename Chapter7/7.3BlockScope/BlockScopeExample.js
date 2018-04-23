function outputNumbers(count) {
    for (var i = 0; i < count; i++) {
        console.log(i);
    }
    console.log(i);
}

outputNumbers(5);

console.log('-------------------')

function outputNumbers1(count) {
    for (var i = 0; i < count; i++) {
        console.log(i);
    }
    var i;
    console.log(i);
}

outputNumbers1(5);

//块级作用域
function outputNumbers(count) {
    (function () {
        for (var i = 0; i < count; i++) {
            console.log(i);
        }
    })();
    // console.log(i); //error
}

(function (){
    var now=new Date();
    if(now.getMonth() == 0&& now.getDate() ==1){
        console.log('happy new year')
    }
})();

//块级作用域可以减少闭包占用内存的问题，因为没有指向匿名函数的引用，只要函数指向完毕，就可以立即销毁其作用域