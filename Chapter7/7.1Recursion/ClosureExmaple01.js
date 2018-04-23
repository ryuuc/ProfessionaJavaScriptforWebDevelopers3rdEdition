function createFunction(){
    var result = new Array();
    for(var i=0;i<10;i++){
        result[i] =function(){
            return i;
        };
    }
    return result;
}

console.log(createFunction());

function createFunction2(){
    var result = new Array();
    for(var i=0;i<10;i++){
        result[i] =function(num){
            return function(){
                return num;
            };
        }(i);
    }
}
console.log(createFunction2());

//有出入

var name = "The window";
var object={
    name:"My object",
    getNameFunc:function(){
        return function(){
            return this.name;
        };
    }
}

console.log(object.getNameFunc()()); //The window


var object1 = {
    name:"My object",
    getNameFunc:function(){
        var that =this;
        return function(){
            return that.name;
        }
    }
}
console.log(object1.getNameFunc()());