/* Create two functions
    convert from Celsius to Fahrenheit °F = °C × (9/5) + 32.
    convert from Fahrenheit to Celsius Celsius °C = (°F - 32) * 5/9. */

"use strict";

let number = 72;

function celToFar(num){ // Celsius to Fahrenheit

    let temp = num;

    temp *= (9/5);
    temp += 32;

    return temp;

}


function farToCel(num){ // Fahrenheit to Celsius

    let temp = num;

    temp -= 32;
    temp *= (5/9);

    return temp;

}

console.log(celToFar(number));
console.log(farToCel(number));

