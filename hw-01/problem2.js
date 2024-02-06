//Create a function that takes an array of numbers and returns the sum of the numbers.

"use strict";

let numbers = [1,2,3,4,5,6,7];

function sumOfNum(arr){

    let sum = 0;

    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    console.log(sum);

}

sumOfNum(numbers);

