const number = [1,2,3,4,5,6,7,8,9]
// jab ham curly braces nahi lagete hai to hame return keyword nahi likhna padhta hai
const newNums1 = number.map((num) => num = num+10)
// console.log(newNums1);

// jab ham curly braces laga dete hai to hame return keyword likhna padhta hai kyoki curly braces scope open akr dete hai
const newNums2 = number.map((num) =>{
    return num = num+10 // jaise yaha likha
})
// console.log(newNums2);

// .......................Chaining........................
// Javascript Method Chaining allows us to run multiple methods on the same element within a single statement
const newNums3 = number
.map((num)=>num*10)
.map((num)=>num+20)
.filter((num)=>num>40)
console.log(newNums3);
