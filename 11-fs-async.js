// IMPORTANT
// async is the best way for user experience, im too tired to write why xp


const { readFile, writeFile } = require('fs')


console.log('start')
//callback functions are functions that run when the event is complete
// if we dont add utf8 we get the buffer and not the text
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', () => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, \n, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')