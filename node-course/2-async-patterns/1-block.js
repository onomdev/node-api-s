const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page')
    }
    if (req.url === '/about') {
        // Blocking code
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)

})

server.listen(5000, () => {
    console.log('server is listening on port 5000')
})