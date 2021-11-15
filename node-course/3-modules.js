// Modules
// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

const names = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade') // if it doesnt have the const the function will work without declaring it here

console.log(data),

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)