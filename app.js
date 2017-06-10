const Twitter = require('twitter');
const config = require('./config.js');

const slothbearBot = new Twitter(config);

var params = {
  q: '#slothbears',
  count: 10,
  result_type: 'recent',
  lang: 'en',
};

function getSlothbearTweets(params) {
  return new Promise((resolve, reject) => {
    slothbearBot.get('search/tweets', params, (err, tweets, res) => {
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
