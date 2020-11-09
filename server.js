const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res) => {
    // console.log(req.url, req.method)
    
    const num = _.random(0,20)
    console.log(num);

        // ---Making a text plain page
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('hello first home page')
    // res.end()

    //Using html
    res.setHeader('Content-Type', 'text/html')

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
                path += '404.html';
                res.statusCode = 404;
            break;
    }

    // fs.readFile('./views/index.html', (err, data)=>{
    // fs.readFile(path, (err, data)=>{
    //     if(err){
    //         console.log(err)
    //         res.end()
    //     }else{
    //         // res.write(data)
    //         res.end(data)
    //     }
    // })
});

server.listen(3000, 'localhost', () =>{
    console.log('Listening to request on port 3000')
})

