const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;

// 30 minutos video 2