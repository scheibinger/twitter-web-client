/**
 * Singleton instance of HomeTimeLineTweets
 * @class TimelineTweets
 * @extends Tweets
 */
define(['lodash', 'collections/tweets', 'models/tweet', 'twitter/api', 'xdate'], function (_, TweetsCollection, TweetModel, twitterApi, XDate) {
    'use strict';

    var HomeTimelineTweets = TweetsCollection.extend({
        fetch: function () {
            var that, newTweets;

            that = this;
            newTweets = [];

            console.log('fetching timeline Tweets');

            // Consuming getTimeline Service
            twitterApi.getHomeTimelineTweets(function (data) {
                console.log(data);
                _.each(data, function (tweetData) {
                    newTweets.push(new TweetModel({
                        createdAt: new XDate(tweetData.created_at),
                        text: tweetData.text,
                        profileImageUrl: tweetData.user.profile_image_url,
                        user: {
                            name: tweetData.user.name
                        }
                    }));
                });
                //adding all tweets at one time, I want to trigger only one Backbone event
                that.reset(newTweets);
            }, function (err) {
                alert(JSON.stringify(err));
            });
        }
    });

    return new HomeTimelineTweets();
});