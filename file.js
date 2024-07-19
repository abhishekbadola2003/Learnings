const fs = require("fs");

//writing to a file
fs.writeFile("qk.txt", "shubham", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.unlink("qk.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
// //reading a file
// fs.readFile('example.txt','utf-8',(err,data) =>{
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("file data: \n" + data);
// });

// //delete file
// fs.unlink("ok.txt", (err) =>{
//     if (err) {
//         console.log(err);
//     }
// })
