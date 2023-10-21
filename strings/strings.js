let myName = "shelkedipak";
myName[0]="T"; // strings are immutables in javascript so it dosent work
myName="Hi " + myName; // replace the string
console.log(myName);
console.log(myName.length);
console.log(myName[0]);
console.log(myName[-1]); // undefined
console.log(myName.at(-1)); // (-) sign gives character in reverse order
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.substring(0,3));
console.log(myName.indexOf("k")); // gives us first index
console.log(myName.indexOf('k',5)); // gives index starting from
console.log(myName.includes("dipak"));
console.log(myName.startsWith("sh"));
console.log(myName.endsWith("ok"));
console.log(myName.substring(3,0)+"H"); // swipe argument as 0,3 and give output accordingly
console.log(myName.substring(-3,3)+"D"); // treat negative argument as zero
console.log(myName.substring(0,-3)+"E");  // null
console.log(myName.substring(4,4)+"F");  // null
console.log(myName.slice(7,3)); // null
console.log(myName.slice(-4)+"OK"); // start  counting from end and gives output like ipak
console.log(myName.trim().length); // remove white spaces from both ends
console.log(myName.substring(0)===myName); // type chech ===
console.log(myName.split("i")) // split the string with i excluding in output
// const text = 'Hello, world! Hello, universe!';
// const newText = text.replace('Hello', 'Hi');
// console.log(newText); // Output: 'Hi, world! Hello, universe!'

// const text = 'Hello, world! Hello, universe!';
// const newText = text.replaceAll('Hello', 'Hi');
// console.log(newText); // Output: 'Hi, world! Hi, universe!'

// const text = 'Hello, world! Hello, universe!';
// const newText = text.replace(/Hello/g, 'Hi');
// console.log(newText); // Output: 'Hi, world! Hi, universe!'

// const str1 = "Hello, ";
// const str2 = "world!";
// const result = str1.concat(str2);
// console.log(result); // Output: "Hello, world!"
