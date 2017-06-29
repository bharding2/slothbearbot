const slothBot = require('./lib/slothbot.js');

var params = {
  q: process.argv[2] || '#slothbears',
  count: process.argv[3] || 10,
  result_type: 'recent',
  lang: 'en',
};

slothBot(params);
