const http = require('http');

// req is request, res is response
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
    /*console.log(req)
    res.write('welcome to our home page')
    res.end()*/
})

server.listen(5000)