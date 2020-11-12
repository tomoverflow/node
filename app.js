const express = require('express')

//express app
const app = express()

app.set('view engine', 'ejs');


//listen
app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<p> Home page</p>')
    // res.sendFile('./views/index.html', { root: __dirname})

    const blogs = [
        {title: 'Tom one', snippet: 'This is tom one'},
        {title: 'Tom two', snippet: 'This is tom two'},
        {title: 'Tom three', snippet: 'This is tom three'}
    ]
    res.render('index', { title: 'Home', blogs});
})

app.get('/about', (req, res)=>{
    // res.sendFile('./views/about.html', { root: __dirname})
    res.render('about', { title: 'About'})
})

app.get('/blog/create', (req, res)=>{
    // res.sendFile('./views/about.html', { root: __dirname})
    res.render('create', { title: 'Create Blog'})
})

// //redirects
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about');
// })

//404 page
app.use((req, res)=>{
    // res.status(404).res.sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404', { title: 'Error'})

})