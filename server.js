const express = require('express');
const helmet = require('helmet');
const db = require('./data/recipe-db.js');

const server = express();

server.use(helmet());
server.use(express.json());

//routers 

server.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await db.getDishes()
        res.status(200).json(dishes);
    } catch (error) {
        
    }
});

module.exports = server;