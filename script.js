// Functions

function greeting(name) {
    var result = 'Hello ' + name 
    console.log(result)
}

greeting('Abhilekh')

function sumNums(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNums(100,150)


// while loop
var num=101
while(num <= 110) {
    num += 1;
    console.log(num)
}

// for loop
for (let num = 0; num <= 10; num++) {
    console.log(num)
}


// Datatypes

let yourAge = 26; //number
let yourName = 'Bob'; //string
let name = {first: 'Abhilekh', last: 'Adhikari'} // object
let truth = false; // boolean
let colors = ['red','green','blue'] //array
let random // undefined
let nothing = null // null

// String methods in JS
let fruit = 'banana'
let moreFruits = 'apple\norange'
console.log(moreFruits)
console.log(moreFruits.length)

console.log(fruit.indexOf('nan'))
console.log(fruit.slice(2,5))
console.log(fruit.replace('ban','123'))
console.log(fruit.toUpperCase())
console.log(fruit.charAt(2))
console.log(fruit[2])
console.log(fruit.split('a'))
console.log(fruit.split(''))
