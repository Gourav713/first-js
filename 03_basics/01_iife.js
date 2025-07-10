// Immediately invoked function  expressioons(IIFE)
// Simple declaration
(function chai(){
    console.log("Chai");
    
})();
// Arrow func declaration
(
    () => {
        console.log("Aur Code");
        
    }
)();
// Arrow func declaration with  parameter
(
    (name)=>{
        console.log(`Name is ${name}`);
        
    }
)("Gourav");