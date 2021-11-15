var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    //this one sends the data as a whole and is not convinient
    //const text = fs.readFileSync('./content/big.txt', 'utf8')
    //res.end(text)

    //this one sends it in chunks
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })

}).listen(5000)
