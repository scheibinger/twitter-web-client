/**
 * @class Tweets
 */
define(['jquery', 'lodash', 'backbone', 'views/tweet'], function ($, _, backbone, TweetView) {
    'use strict';

    var TweetsView = backbone.View.extend({

        el: '',
        template: '',
        events: {},
        /**
         * This is a good example of Observer Pattern
         * View is observing for changes in the model
         */
        initialize: function () {
            this.tweetsCollection = this.options.tweetsCollection;
            this.listenTo(this.tweetsCollection, 'reset', this.resetTweets);
            //this.listenTo(this.tweetsCollection, 'change:completed', this.filterOne);
            this.listenTo(this.tweetsCollection, 'all', this.render);

            this.tweetsCollection.fetch();
        },

        render: function () {

        },

        /**
         * Appending tweets to the view
         * @param tweetsCollection
         */
        resetTweets: function (tweetsCollection) {
            var row;
            this.tweetsCollection.each(function (tweet, index, collection) {
                var view = new TweetView({ model: tweet });
                if (index % 3 === 0) {
                    row = $('<div class="row"></div>');
                }
                row.append(view.render().el);
                if (index % 3 === 2 || index === collection.length) {
                    $('#tweets').append(row);
                }
            });

        },

        // Add all items in the **Tweets** collection at once.
        addAll: function (tweets) {
            this.$('#todo-list').html('');
            tweets.each(this.addOne, this);
        }

    });

    return TweetsView;
});