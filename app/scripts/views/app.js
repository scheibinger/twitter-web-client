/**
 * @class AppView
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'collections/homeTimelineTweets',
    'views/tweets',
    'views/header',
    'text!templates/app.html'
], function ($, _, Backbone, homeTimelineTweetsCollection, TweetsView, HeaderView, appTemplate) {
    'use strict';

    var AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#app',

        // Compile our stats template
        template: _.template(appTemplate),

        // Delegated events for creating new items, and clearing completed ones.
        events: {

        },

        // At initialization we bind to the relevant events on the `Tweets`
        // collection, when items are added or changed.
        initialize: function () {
            //initializing collections for nested views
            //timeLineView is loaded by default
            this.mainView = new TweetsView({
                el: this.$('#main'),
                tweetsCollection: homeTimelineTweetsCollection
            });

            //initializing nested views
            this.header = new HeaderView({ el: this.$('#navbar') });
            this.$main = this.$('#main');
        },

        // Re-rendering the App just means refreshing the tweets and header-- the rest
        // of the app doesn't change.
        render: function () {
            this.$main.html(this.template());
            this.header.render();
            this.mainView.render();
        }
    });

    return AppView;
});