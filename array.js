const fs = require("fs");

const arr = [1, 4, 3, "apple", { name: "Abhi" }, 8, 2];

//push adds one more eleements aat the end of the array
arr.push(5);
console.log("push : " + arr);
//pop removes the last element from the array
arr.pop();
console.log("pop : ", arr);
//Sorts the array in any datatype on the basis of unicode given to that character
arr.sort();
console.log("sort : ", arr);
//shift removes one eleement from the starting of the array
arr.shift();
console.log("shift : " + arr);
//unshift adds one element on the starting of the array
arr.unshift("ok");
console.log(arr);
//concat merges two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concat = arr1.concat(arr2);
console.log("concat merging two arrays arr1 and arr2 : ", concat);

//splice
const slicedarr = arr.slice(1, 2);
console.log(slicedarr);

arr.splice(3, 2, 6, 7, 8);
console.log(arr);
