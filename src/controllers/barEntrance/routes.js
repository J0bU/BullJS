const { Router } = require('express');
const { postEntrance } = require('./barEntranceController');
const router = Router();

router.post('/bar-entrance', postEntrance);
module.exports = app => {
  app.use('/entrance', router);
};
