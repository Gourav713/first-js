let marvel_heros =["Ironman", "Spiderman", "thor"]
let dc_heros =["Batman", "Flash", "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// let newarr = marvel_heros.concat(dc_heros)
// console.log(newarr);

// instead of all of this we use spread operator (...)

// let all_heros =[...marvel_heros, ...dc_heros]
// console.log(all_heros);


// console.log(Array.isArray("Gourav"));
// console.log(Array.from("Gourav"));
// console.log(Array.from({name:"gourav"})); // It is intresting for interview because it always give empty array because hamne bataya nahi hai kise array me convert karna hai. value ko yaa key ko

// if we want to convert the element into array form then we use we use ".of"
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));




