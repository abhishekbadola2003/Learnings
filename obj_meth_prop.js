
let fruits = ['apple','banana','mango'];


function fruitname(array, fruit){
    array.push(fruit);
}

// methods used to push a string 

fruits.push('orange');
console.log(fruits);

//function used to add string in the starting
fruits.unshift('papaya');
console.log(fruits);

//called the function to add a string
fruitname(fruits,'grapes');
console.log(fruits);