const Twitter = require('twitter');
const config = require('./config.js');

const slothbearBot = new Twitter(config);

var params = {
  q: '#slothbears',
  count: 10,
  result_type: 'recent',
  lang: 'en',
};

slothbearBot.get('search/tweets', params, (err, tweets, res) => {
  if (err) return console.log(err);
});
