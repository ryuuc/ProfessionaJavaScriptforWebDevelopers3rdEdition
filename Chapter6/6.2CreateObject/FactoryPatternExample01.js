function createPerson(name,age,job){
    var o =new Object();
    o.name =name;
    o.age =age;
    o.job =job;
    o.sayName =function(){
        console.log(this.name);
    }
    return o;
}       

var person1 =createPerson("Nicohloas",29,"Software Engineer");
var person2 = createPerson("Greg",27,"Doctor");
person1.sayName();
person2.sayName();

// 工厂模式虽然解决了创建多个相似对象的问题，
//但却没有解决对象识别的问题（即怎样知道一个对象的类型）