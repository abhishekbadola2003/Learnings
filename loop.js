const { arrayBuffer } = require("stream/consumers");

let num = [4, 8, 2, 6];


//foreach looping method
num.forEach((Element) => {
  console.log(Element * Element);
});

let fruits=['Apple','Mango','Grapes']
fruits.forEach((element)=>{
    console.log("Fruits are: "+element);

})

//array.from
let name='ABHI';
let arr=Array.from(name);
console.log(arr);
