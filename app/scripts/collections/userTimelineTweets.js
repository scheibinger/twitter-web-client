/**
 * Singleton instance of UserTimelineTweets
 * @class TimelineTweets
 * @extends Tweets
 */
define(['collections/tweets', 'twitter/api'], function (TweetsCollection, twitterApi) {
    'use strict';

    var MyTweets = TweetsCollection.extend({
        fetch: function () {
        }
    });

    return new MyTweets();
});