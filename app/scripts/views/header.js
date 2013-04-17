/**
 * @class Header
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'text!templates/header.html',
    'models/user'
], function ($, _, backbone, headerTpl, userModel) {
    'use strict';

    var Header = backbone.View.extend({
        template: _.template(headerTpl),
        initialize: function () {
            var that = this;
            this.$loggedAsIn = this.$('.app-logged-as-in');

            this.listenTo(userModel, "change", function () {
                that.$('.app-logged-as-in')[0].innerText = userModel.get('name');
            });

            userModel.fetch();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });

    return Header;
});