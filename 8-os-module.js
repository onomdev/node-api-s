//os or operating system module is a built in module
const os = require('os')

//info about current user 

const user = os.userInfo();
console.log(user)

// method returns the user uptime in seconds
console.log('the system uptime is ', os.uptime(), 'in seconds')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
