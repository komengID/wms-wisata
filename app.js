const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('css', path.join(__dirname, 'public', 'css'));

app.get(/dashboard/, (req, res) => {
    res.render('dashboard');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})