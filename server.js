const express = require('express');
const helmet = require('helmet');
const db = require('./data/recipe-db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await db.getDishes()
        res.status(200).json(dishes);
    } catch (error) {
        
    }
});

server.get('/api/dishes/:id', async (req, res) => {
    try {
        const dish = await db.getDish(req.params.id)
        const recipes = await db.getRecipes()
            .where({ dish_id : req.params.id })
        res.status(200).json({dish, recipes});
    } catch (error) {
        
    }
});

server.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await db.getRecipes()
        res.status(200).json(recipes);
    } catch (error) {
        
    }
});

server.post('/api/dishes', async (req, res) => {
    try {
        const { id } = await db.addDish(req.body);
        const newDish = await db.getDish(id);
        res.status(201).json(newDish);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/api/recipes', async (req, res) => {
    try {
        const { id } = await db.addRecipe(req.body)
        const newRecipe = await db.getRecipes()
            .where({ id })
            .first();
        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = server;