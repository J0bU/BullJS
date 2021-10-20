const Arena = require('bull-arena');
const Bull = require('bull');
const { queues } = require('./queues');

const arenaConfig = Arena(
  {
    Bull,
    queues
  },
  {
    // Make the arena dashboard become available at {my-site.com}/arena.
    basePath: '/arena',

    // Let express handle the listening.
    disableListen: true
  }
);

module.exports = {
  arenaConfig
};
