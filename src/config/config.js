'use strict';
module.exports.global = {
  port: process.env.PORT,
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
  }
};
