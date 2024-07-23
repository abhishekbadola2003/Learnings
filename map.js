let fruits = new Map();

//set method
fruits.set("apple",100)
fruits.set("mango",150)
fruits.set("orange",70)

console.log(fruits);

//get method
fruits.get("apple");
fruits.get("mango");

console.log("price of mango is : ",fruits.get("apple"));

//has(key) is used ot check whether the key exist or not with the help of true or false
console.log(fruits.has("apple"));
console.log(fruits.has("banana"));

//delete(key) is used to delete any key value pair
fruits.delete("orange");
console.log(fruits.has("orange"));

//size() is used to get the siize of the map
console.log(fruits.size);

//clear() is used to clear all the key value pairs
fruits.clear();
console.log(fruits.size);


//set method
fruits.set("guava",100);
fruits.set("watermelon",70); 
fruits.set("melon",150);

