let score ="13abc"

console.log(typeof score);
console.log(typeof (score));


let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "Simran" => NaN 
// true => 1; false =>0 
// null => 0


let isLoggedIn = ""
let isBooleanLoggedIn = Boolean(isLoggedIn)
console.log(isBooleanLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Simran" => true


let someNumber =99
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************************************OPERATIONS******************************************************************

let value = 143
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**4);
console.log(2/2);
console.log(2%2);

let str1 ="Simran"
let str2 ="  loves  harry"
console.log(str1+str2);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2"+2);
console.log(1+2+"3");

console.log((3+4) * 7 % 5); // use paranthesis

let gameCounter = 100
++gameCounter;
console.log(gameCounter);