const express = require('express');
const app = express();
const path = require('path');
const genreRouter = require('./routes/genre.routes.js')
const filmRouter = require('./routes/film.routes.js')

app.use(express.static('public'))
app.use(express.json())
app.use('/api', genreRouter)
app.use('/api', filmRouter)

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


app.listen(5000, () => {
    console.log('Application listening on port 5000!');
});