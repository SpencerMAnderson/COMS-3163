//Create a similar function to the last that multiplies all the numbers

"use strict";

let numbers = [1,2,3,4,5,6];

function prodOfNum(arr){

    let product = 1;

    for (let i = 0; i < arr.length; i++)
    {
        product *= arr[i];
    }

    console.log(product);

}

prodOfNum(numbers);