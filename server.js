'use strict';

// NOTE: Don't change the port number
const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file `stocks.js`


const express = require("express");
const app = express();

const path = require('path');
app.use(express.urlencoded({
    extended: true
}));

// Add your code here

app.use(express.static('public'));

app.use(express.static(path.join(__dirname,'/public')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
