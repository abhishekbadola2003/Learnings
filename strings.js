let namee = "hello world";
console.log(namee);

// charAt is used to return character at a specified index.

namee.charAt(4);
console.log(namee.charAt(4));

namee.charAt(4,5);
console.log(namee.charAt(4,5));

//replace string characters
console.log(namee.replace('hello world','Namaste'));

//merge strings
const node = ' this is nodejs';
console.log(namee.concat(node));

//remove whitespaces
const ok = "    Hello    World    ";
console.log(ok.trim());

console.log(namee.length);
