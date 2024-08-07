console.log(`test`);

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push(`pizza`,`cheeseburger`);

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift(`taco`);

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1];

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2,0,`tofu`);

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1,1,`sushi`,`cupcake`);

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1,3);

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf(`tofu`);

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods = foods.join(` -> `);

console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes(`soup`);

console.log('Exercise 10 result:', hasSoup);


//! FOR 
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//  }

//! FOR . . .OF
//  for (const element of arr) {
//    console.log(element);
//  }
 

//! forEACH
//  arr.forEach((element) => {
//    console.log(element);
//  });
 


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// loop
// test for odd numbers 
// if pass push odd unto array, if fail move on 

const odds = [];

for (let idx = 0; idx < nums.length; idx++) {
      if ( nums[idx] % 2 !== 0) {
         odds.push(nums[idx]);
      }
   }

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (idx = 0; idx < nums.length; idx++) {
   if (nums[idx] % 3 === 0){
      fizz.push(nums[idx]);
    } else  if (nums[idx] % 5 === 0) {
      buzz.push(nums[idx]);
    }

   if (nums[idx] % 3 === 0 && nums[idx] % 5 === 0){
         fizzbuzz.push(nums[idx]);
      }

}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let numList;
if (typeof numArrays[numArrays.length - 1] === 'object') {
   numList = (numArrays[numArrays.length - 1]);
}

//? Figured out how to use .at(-1) from Level Up Content kept original up top
// if (typeof numArrays.at(-1) === 'object'){
//    numList = numArrays.at(-1);
// }


console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

let row = -1;
let column = 0;

do {
   row++;
   column = numArrays[row].indexOf(66);
   numArrays[row].includes(66);
} while (numArrays[row].includes(66) !== true);

const num = numArrays[row][column];

console.log('Exercise 14 result:', num);

//? figured out how to go loop through array without by using forEach
//? decided to keep my complex code above LOL

/*
let r;
let c;

numArrays.forEach((row,i) => {
   if(row.includes(66) === true){
      r = i;
      c = row.indexOf(66);
   };
});

const num = numArrays[r][c];

*/


/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;

numArrays.forEach((row) => {
   row.forEach((value) => {
      total = value + total;
   });
   // console.log(row); 
});


console.log('Exercise 15 result:\n', total);

