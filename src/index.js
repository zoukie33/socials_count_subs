const Twitter = require('twitter');

var twitterClient;

module.exports = {
  init: function(creds) {
    twitterClient = new Twitter(creds);
  },
  getTwitter: function(accUrl) {
    let twitterPseudo = accUrl.substr(20);
    twitterClient
      .post('users/lookup', { twitterPseudo })
      .then(user => {
        return user.followers_count;
      })
      .catch(error => {
        console.error(error);
      });
  },
  getYoutube: function() {},
  getTwitch: function() {},
  getFacebook: function() {}
};
