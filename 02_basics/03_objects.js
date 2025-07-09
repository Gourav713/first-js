// both declaration are same
// const JsUser = new Object() // it is a singleton object
// const JsUser ={} // it is non singleton objects

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
const obj1  = {a:1, b:2, c:3}
const obj2  = {e:1, f:2, g:3}
console.log(Object.assign(obj1,obj2)); // both are same but 
console.log(Object.assign({},obj1,obj2)); // this is a good way
const obj3 = {...obj1, ...obj2} // 90% of time we use this because it is simmple to use
console.log(obj3);
// Object.keys() returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object
// Syantax: Object.keys(objectName)
