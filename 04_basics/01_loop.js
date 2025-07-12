// for (const element of object) {
//     // write code
// }

let nums =[1,2,3]
for (const el of nums) {
    // console.log(el);
}

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map 's collection.
const map = new Map()
map.set("Name", "Gourav")
map.set("Location", "Indore")
map.set("Gender", "Male")
map.set("Location", "Indore") // location occure two time but in output it only printt one time
// console.log(map);
// now we applying loop on it
for (const [key, value] of map) {
    console.log(key, ":",  value);
    
}