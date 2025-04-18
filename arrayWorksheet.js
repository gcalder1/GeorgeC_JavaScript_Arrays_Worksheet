//+++Part 1+++//

const fruits = ["apple", "banana", "cherry"]; //Array Creation//
console.log(`Array creation: ${fruits}`);


let fruitIndexOfOne = fruits[1]; //Accessing Array Elements//
console.log(`Accessing Array Elements: ${fruitIndexOfOne}`);


let totalFruits = fruits.length; //Using Length//
console.log(`Using Length: ${totalFruits}`);


//+++Part 2+++//

fruits.push("orange"); //Using push//
console.log(`Using push: ${fruits}`);

fruits.pop(); //Using pop//
console.log(`Using pop: ${fruits}`);

//For the challenge, the two fruits I will be adding are: tomato & pepper.
//What I think will happen is that adding both will increase the index by 
//2, where the first item added will take the index of 3 and the second 
//item added will take the index of 4. Then using pop to remove the last
//added item will then make the highest index be an index of 3, with 
//fruits.length displaying as 4.
fruits.push("tomato", "pepper");
console.log(fruits);
fruits.pop();
console.log(fruits);

//+++Part 3+++//

for (let fruitChoice = 0; fruitChoice < fruits.length; fruitChoice++){ //using for loop for all fruits
    console.log(`Current fruit: ${fruits[fruitChoice]}`); //showing each fruit passed through the loop till end
}

for (let fruitChoice = 0; fruitChoice < fruits.length; fruitChoice++){  //using for loop to uppercase all letters
    console.log(`CURRENT FRUIT: ${fruits[fruitChoice].toUpperCase()}`);
}

const search = "apple";
let currentCount = 0;

for (let fruitChoice = 0; fruitChoice < fruits.length; fruitChoice++){ //counting specific items

    if (fruits[fruitChoice] === search){
        currentCount = currentCount + 1;
        
    }
    
};

console.log(`The searched word appears: ${currentCount} time(s).`); //belongs on the outside because we only need it to run once when we want to know how many times it appeared NOT when it does appear

//+++Part 4+++//

let cart = []; //building a shopping cart

cart.push("cereal", "milk", "granola");
console.log(cart);

cart.pop();
console.log(`There are ${cart.length} items in the cart: ${cart}`);

let numbers = [1, 2, 3, 4, 5]; //reverse the order

for (let reverseNums = numbers.length - 1; reverseNums >= 0; reverseNums--){
    console.log(numbers[reverseNums]);
};

//+++Part 5+++//

let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if (array1.length > array2.length){
    console.log("Array 1 has a greater length");
} else if (array2.length > array1.length) {
    console.log("Array 2 has a greater length")
} else {
    console.log("Both arrays equal the same length");
};

//+++Part 6+++//

const pt6Array = [10, 20, 30, 40, 50, 60];

for (let pt6Even = 0; pt6Even < pt6Array.length; pt6Even++){
    if (pt6Even % 2 === 0){
        console.log(pt6Array[pt6Even]);
    }
}

//+++Part 7+++//

const studentNames = ["Alice", "Bob", "Charlie"];
const subjectNames = ["Math", "Science"];

for (let studentIndex = 0; studentIndex < studentNames.length; studentIndex++){
    for (let subjectIndex = 0; subjectIndex < subjectNames.length; subjectIndex++){
        console.log(`${studentNames[studentIndex]} - ${subjectNames[subjectIndex]}`);
    };
};

/*
The way my nested loop works is that the outer loop control the overall flow, where the
inner loop iterates through its array multiple times in conjunction with where the outer 
loop is in its interation of its elements. This in turn forms a temporary pair between the 
current outer element AND the inner elements that are iterated through at this point in
the outer loop's iteration. The reason these pairs exist is because the information referenced
by the outer loop in it's block scope can be accessed by the inner loop, therefore allowing us to 
access the information referenced by both within the scope of the nested loop to then console
log those pairs and interpolate them to visually see the information next to each other in a
template literal.
*/