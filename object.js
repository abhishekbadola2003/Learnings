const { log } = require("console");
const { LOADIPHLPAPI } = require("dns/promises");

const person = {
  firstname: "Abhishek",
  lastname: "Badola",
  role: "js developer",
  Age: 21,
  isemployed: true,
  sayhello: function(){
    // let that = this;
    // console.log("HELLO, My name is : ", that.firstname);
    console.log("HELLO, My name is : ", person.firstname);
  },
  sayhi: function () {
    let that = this;
    console.log("I'm a ", this.role);
  },
};

console.log(person.firstname);
person.sayhello();
person.sayhi();
console.log(person.isemployed);


// this was the window object thats why it is showing undefined 
//converting this intp global object with the help of let that  