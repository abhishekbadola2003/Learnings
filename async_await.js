async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(450);
    }, 2500);
  });
}

console.log("Loading modules");
console.log("Do something else");
console.log("Load Data");
let data = getData;
console.log(data);
console.log("process data");
