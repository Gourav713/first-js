let marvel_heros =["Ironman", "Spiderman", "thor"]
let dc_heros =["Batman", "Flash", "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// let newarr = marvel_heros.concat(dc_heros)
// console.log(newarr);

// instead of all of this we use spread operator (...)

// let all_heros =[...marvel_heros, ...dc_heros]
// console.log(all_heros);


console.log(Array.isArray("Gourav"));
console.log(Array.from("Gourav"));
console.log(Array.from({name:"gourav"})); // It is intresting for interview because it always give empty array necause hamne bataya nahi hai kise array me convert karna hai. value ko yaa key ko


