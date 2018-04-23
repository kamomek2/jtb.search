const NODE_ENV = process.env.NODE_ENV || 'dev';

let config = null;

if (NODE_ENV === 'production') {
  config = require('./prod');
} else {
  config = require('./dev');
}

module.exports = config;
