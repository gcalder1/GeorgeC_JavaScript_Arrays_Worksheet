//+++Part 1+++//
const arrayCreation = document.querySelector('.arrayCreation');
const accessingArrayElements = document.querySelector('.accessingArrayElements');
const usingLength = document.querySelector('.usingLength');

const fruits = ["apple", "banana", "cherry"]; //Array Creation//
console.log(fruits);
arrayCreation.innerText = `Array creation: ${fruits}`;


let fruitIndexOfOne = fruits[1]; //Accessing Array Elements//
console.log(fruitIndexOfOne);
accessingArrayElements.innerText = `Accessing Array Elements: ${fruitIndexOfOne}`;


let totalFruits = fruits.length; //Using Length//
console.log(totalFruits);
usingLength.innerText = `Using Length: ${totalFruits}`;

//+++Part 2+++//
const usingPush = document.querySelector('.usingPush');
const usingPop = document.querySelector('.usingPop');
const part2Challenge = document.querySelector('.part2Challenge');

fruits.push("orange"); //Using push//
console.log(fruits);
usingPush.innerText = `Using push: ${fruits}`;


fruits.pop(); //Using pop//
console.log(fruits);
usingPop.innerText = `Using pop: ${fruits}`;


//For the challenge, the two fruits I will be adding are: tomato & pepper.
//What I think will happen is that adding both will increase the index by 
//2, where the first item added will take the index of 3 and the second 
//item added will take the index of 4. Then using pop to remove the last
//added item will then make the highest index be an index of 3, with 
//fruits.length displaying as 4.
fruits.push("tomato", "pepper");
console.log(fruits);
fruits.pop([4]);
console.log(fruits);
part2Challenge.innerText = `Updated array: ${fruits} | Updated length: ${fruits.length}`;

//+++Part 3+++//



