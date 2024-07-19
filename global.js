// process.stdout.write('input value to print: \n')
// process.stdin.on('data', (data) => {
//     console.log("here is the input: ", data.toString().trim())
//     process.exit()
// })  

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("what is your name: \n", (answer) => {
    console.log("Your name is:", answer)
    process.exit()
})