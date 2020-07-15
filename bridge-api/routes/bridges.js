const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/bridges/:id', function(req, res) {
  const id = req.params.id;
  const bridge = db.byId(id);

  if(!bridge) 
    return res.sendStatus(404);

  res.json(bridge);
});

router.get('/bridges', function(req, res, next) {
  res.json(db.all())
});

module.exports = router;