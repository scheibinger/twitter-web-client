/**
 * @class Tweet
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'text!templates/tweet.html'
], function ($, _, backbone, tweetTpl) {
    'use strict';

    var Tweet = backbone.View.extend({

        tagName: 'div',
        className: 'span3 well tweet',

        template: _.template(tweetTpl),
        initialize: function () {

        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return Tweet;
});