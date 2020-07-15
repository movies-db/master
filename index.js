const express = require('express');
const app = express();

const { PORT } = require('./config');
const localPort = PORT || 5000;
const db = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.get('/', (req, res) => {
    res.send(`Movie data`);
});
app.use('/api/movies', require('./routes'));

if (db) {
    app.listen(localPort, (req, res) => {
        console.log(`Server runs on port ${localPort}`);
    });
}