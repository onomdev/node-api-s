const { readFileSync, writeFileSync } = require('fs')
console.log('start')

//const fs = require('fs');  different way of calling it

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, '\n', second);

// use `` in order for ${} to work the button next to 1
// { flag: 'a' } repeats the text once
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, \n, ${second} , \n`, { flag: 'a' });

console.log('done with the task')
console.log('starting the next one')


//IMPORTANT
// this is not practical for real world apps if onw user is attempting this task, and the task takes a long time to complete then the applicaton is down, 
// other users cannot do anything