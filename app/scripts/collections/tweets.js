/**
 * @class Tweets
 */
define([
    'lodash',
    'backbone',
    'models/tweet'
], function (_, Backbone, Tweet) {
    'use strict';

    var TweetsCollection = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: Tweet

    });

    return TweetsCollection;
});