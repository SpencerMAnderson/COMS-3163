//Create a function that filters out negative numbers from an array. It takes an array and returns a new array.

"use strict";

let numbers = [1,2,3,-4,-5];

function filter(arr){

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            newArr[i] = arr[i];
        }
    }

return newArr;

}

console.log(filter(numbers));