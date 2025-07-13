// The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value.
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10
// .......................Shortcut method.......................
const arr=[1,2,3,4,5,6]
const sumAllValue = arr.reduce((acc , curr)=>acc+curr,0)
console.log(sumAllValue);
// .............Example Shopping cart..........................
const ShoppingCart = [
    {
        itemName : "py Course",
        price:999
    },
    {
        itemName : "Mobile dev Course",
        price:5999
    },
    {
        itemName : "Java Course",
        price:2999
    },
    {
        itemName : "AI Course",
        price:8999
    }
]
const finalPrice = ShoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(`Final price is: ${finalPrice}`);
