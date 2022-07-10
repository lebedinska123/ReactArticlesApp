const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('../dest'));

app.get('/bundle.js', (request, response) => {
    console.log(request);

    response.sendFile(path.resolve(__dirname, '../dest/bundle.js'));
});

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(3000);
