//+++Part 1+++//
const arrayCreation = document.querySelector('.arrayCreation');
const accessingArrayElements = document.querySelector('.accessingArrayElements');
const usingLength = document.querySelector('.usingLength');

let fruits = ["apple", "banana", "cherry"]; //Array Creation//
console.log(fruits);
arrayCreation.textContent = `Array creation: ${fruits}`;


let fruitIndexOfOne = fruits[1]; //Accessing Array Elements//
console.log(fruitIndexOfOne);
accessingArrayElements.textContent = `Accessing Array Elements: ${fruitIndexOfOne}`;


let totalFruits = fruits.length; //Using Length//
console.log(totalFruits);
usingLength.textContent = `Using Length: ${totalFruits}`;

//+++Part 2+++//
