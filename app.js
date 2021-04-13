const express = require('express');
const chalk = require('chalk');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')))


app.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/home-page.html'));
});

app.get('/About', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/About-page.html'));
});


app.get('/photo', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/photo-gallery-page.html'));
});

app.get('/Works', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/Works-page.html'));
});

app.listen(3000, () => {
    console.log(chalk.bgCyan.black('server listening on port 3000'))
})