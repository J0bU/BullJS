const { Router } = require('express');
const { getAll } = require('./barController');
const router = Router();

router.get('/get-all', getAll);

module.exports = app => {
  app.use('/bar', router);
};
