const Twitter = require('twitter');
const slothbearBot = new Twitter(require('../config.js'));

module.exports = function(params) {
  //tweet logic
  function getSlothbearTweets(params) {
    return new Promise((resolve, reject) => {
      slothbearBot.get('search/tweets', params, (err, tweets) => {
        if (err) return reject(err);
        resolve(tweets);
      });
    });
  }
};
