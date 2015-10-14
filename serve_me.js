#!/usr/bin/node

'use strict';

const express = require('express');
const app = express();

if (!process.argv[2]) {
    return console.log('path is missing');
}


app.use(express.static(process.cwd() + '/' + process.argv[2]));
app.listen(process.argv[3] || 80);

console.log('Serving', process.cwd() + '/' + process.argv[2], 'in port', process.argv[3] || 80);
