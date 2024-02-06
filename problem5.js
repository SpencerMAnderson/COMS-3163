//Create a function that determines if a number is divisible by 10. It should return true or false

"use strict";

let number1 = 121; //false
let number2 = 120; //true
let number3 = 42; //false
let number4 = 10; //true

function isDivisible(num){

    if(num%10 == 0)
    {
        return true;
    }

    return false;

}

console.log(isDivisible(number1));
console.log(isDivisible(number2));
console.log(isDivisible(number3));
console.log(isDivisible(number4));