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

  function favoriteSlothbearTweets(tweets) {
    return new Promise((resolve, reject) => {
      tweets.statuses.forEach((tweet) => {
        let statusId = {
          id: tweet.id_str
        };

        slothbearBot.post('favorites/create', statusId, (err, res) => {
          if (err) return reject(err);

          let username = res.user.screen_name;
          let tweetId = res.id_str;

          console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`);
        });
      });
    });
  }

  getSlothbearTweets(params)
    .then(favoriteSlothbearTweets)
    .catch(console.log);
};
