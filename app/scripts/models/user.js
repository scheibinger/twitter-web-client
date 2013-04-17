/**
 * User is singleton
 * @class User
 */
define(['backbone', 'twitter/api'], function (Backbone, twitterApi) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        // Default attributes for the Tweet
        defaults: {
            screenName: '',
            name: ''
        },

        fetch: function () {
            var that = this;
            twitterApi.getUser(function (data) {
                console.log(data);
                that.set('name', data.name);
                that.set('screenName', data.screenName);
            }, function (err) {
                alert(JSON.stringify(err))
            });
        }
    });

    return new UserModel();
});