// object literals
// Symbol is a data type introduced in ECMAScript 2015(ES6). It represents a unique and immutable value , often used as an identifier for object properties. Here is an example of that:
// const sym1 = Symbol('description');
// const sym2 = Symbol('description');
// console.log(sym1 === sym2); // false


const mysym=Symbol("key");

const JsUser = {
    name:"Gourav",
    [mysym]:"myKey1",//declaration of symbol
    "Full name":"Gourav Raj Verma",
    age:18,
    location:"Jaipur",
    email:"gourav@google.com"

}

console.log(JsUser.email);
console.log(JsUser["email"]); // Professional way to access the object's value

// if we want to lock the array to lock we use "Object.freeze(ObjectName)" 
JsUser.email="gourav@microsoft.com";
Object.freeze(JsUser)
JsUser.email="gourav@chatgpt.com";
console.log(JsUser);





