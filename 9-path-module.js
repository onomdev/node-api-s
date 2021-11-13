// path module

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath)


// gives only the base file of the path, in this case test.txt
const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);