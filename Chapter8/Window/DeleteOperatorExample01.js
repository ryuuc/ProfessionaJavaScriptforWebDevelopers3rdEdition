var age = 29;
window.color = "red";
delete window.age;

delete window.color;

console.log(window.age); 
console.log(window.color);