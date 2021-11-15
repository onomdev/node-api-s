const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on - listen for an event
// emit - emit an event

//IMPORTANT!!! THE ORDER OF THE FUNCTION MATTERS HERE
//ALWAYS INVOKE THE FUNCTION AFTER THe lISTENERS

//listen for event
customEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

//emit event
customEmitter.emit('response', 'john', 34)