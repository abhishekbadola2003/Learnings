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

// create an array which will double the calue if exisiting array 
let abc=[4,8,1,6]
let x = abc*2;
let xyz=Array.from(x)
console.log(xyz);