const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

app.get('/', (req, res) => {
    res.render('index');
    }
);  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})