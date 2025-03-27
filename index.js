// 1
let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where",12,56];

console.log(arr1.at(-1));
console.log(arr2.at(-1));

//2
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets1 =myPets.join(" ");
console.log({myPets1});

// 3
var arr3 =[-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((x,y)=>x-y);
console.log("Sorted array:",arr3);

// 4
let arr =["boy", "man", "girl",  "school", "girl", "woman"];
let newArr =[...new Set(arr)];
console.log({newArr});

let newArr1 =arr.filter((item,index)=>arr.indexOf(item) !== index);
console.log({newArr1});

// 5
let arr5 =["the", "way", "x", 4];
let word ="food"
let word1 =arr5.map(item =>item === word? item:null).filter(Boolean);
console.log(word1.length >0 ? word1[0]:"The search word was not found");

// 6
let word2 ="renniw";
let sortedWord2 =word2.split("").sort().join("");
console.log(sortedWord2);

// 7
let fruits =["Mango","Avocado","Kiwi","Apple","Orange","Pineapple","Guava","Watermelon","Bannana","Grapes"];
fruits.splice(5,0,"Tomato");
console.log({fruits});

