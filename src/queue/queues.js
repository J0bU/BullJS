'use strict';

const {
  global: { redis }
} = require('../config/config');

const {
  bar: barWorker,
  barEntrance: barEntranceWorker
} = require('../workers');

const Queue = require('bull');

const bar = new Queue('bar', `'${redis}'`);
const barEntrance = new Queue('barEntrance', `'${redis}'`);

bar.process((job, done) => barWorker(job, done));
barEntrance.process('entrance', (job, done) => barEntranceWorker(job, done));

const queues = [
  {
    type: 'bull',

    // Name of the bull queue, this name must match up exactly with what you've defined in bull.
    name: 'bar',

    // Hostname or queue prefix, you can put whatever you want.
    hostId: 'BarQueueManager',

    // Redis auth.
    redis
  },
  {
    type: 'bull',

    // Name of the bull queue, this name must match up exactly with what you've defined in bull.
    name: 'barEntrance',

    // Hostname or queue prefix, you can put whatever you want.
    hostId: 'BarEntranceQueueManager',

    // Redis auth.
    redis
  }
];
module.exports = {
  bar,
  barEntrance,
  queues
};
