let names=[];
let fruits = new Array();
fruits[0]="mango";
let mixed=[1,"dipak", null,true]
mixed[9]="ok";
let res=Array.isArray(fruits);
console.log(mixed[9])
let age=[4,23,21,65,45,33]
let x= age.length;
let y=age.toString();
age.push(92); // add at the end
age.pop() // delete from end
age.shift(); // delete from beginning
age.unshift(1) // add at the beiniing
let newArray = age.concat(fruits); 

const myArray = [1, 2, 3, 4, 5];
//myArray.splice(starting index, number of elemets to delete, replace wale item or addition wale elemets);
// myArray.splice(2, 2); // Remove 2 elements starting at index 2
// console.log(myArray); // [1, 2, 5]

// myArray.splice(2, 3, 'A', 'B','C','D'); // Replace 2 elements with 'A' and 'B'
// console.log(myArray); // [1, 2, 'A', 'B', 5]

//myArray.splice(2, 0, 'A', 'B'); // Add 'A' and 'B' at index 2 without removing any elements
//console.log(myArray); // [1, 2, 'A', 'B', 3, 4, 5]

// myArray.splice(-2); // Remove the last two elements
// console.log(myArray); // [1, 2, 3]


// const originalArray = [1, 2, { name: 'Alice' }, { name: 'Bob' }];
// const copiedArray = originalArray.slice();
// originalArray[2].name = 'Charlie';
// console.log(copiedArray); // 'Charlie' - Changes are reflected in the copied array because objects are shallow-copied.


console.log(age.sort())