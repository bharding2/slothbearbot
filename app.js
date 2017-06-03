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

  tweets.statuses.forEach((tweet) => {
    let statusId = {
      id: tweet.id_str
    };

    slothbearBot.post('favorites/create', statusId, (err, res) => {
      if (err) return console.log(err);

      let username = res.user.screen_name;
      let tweetId = res.id_str;

      console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`);
    });
  });
});
