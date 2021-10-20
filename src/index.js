'use strict';

// Initialization
const express = require('express');
const app = express();

// Settings!
require('dotenv').config();
const {
  global: { port }
} = require('./config/config');

const { arenaConfig } = require('./queue/queueConfig');
const barRoutes = require('./controllers/bar/routes');
const barEntranceRoutes = require('./controllers/barEntrance/routes');

// Middlewares here!
app.use(express.json());

// Routes here!
barRoutes(app);
barEntranceRoutes(app);
app.use('/', arenaConfig);

// Server here!
require('./server')(app, port);
