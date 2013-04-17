/**
 * @class Tweet
 */
define(['backbone'], function (Backbone) {
    'use strict';

    var TweetModel = Backbone.Model.extend({
        // Default attributes for the Tweet
        defaults: {
            createdAt: null,
            text: ''
        }
    });

    return TweetModel;
});
