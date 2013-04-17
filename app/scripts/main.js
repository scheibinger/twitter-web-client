require.config({
    shim: {
        xdate: {
            exports: 'xdate'
        },
        lodash: {
            exports: '_'
        },
        backbone: {
            deps: [
                'lodash',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../components/jquery/jquery',
        lodash: '../components/lodash/lodash',
        backbone: '../components/backbone/backbone',
        text: '../components/requirejs-text/text',
        bootstrap: 'vendor/bootstrap',
        xdate: '../components/xdate/src/xdate'
    }
});
require([
    'backbone',
    'views/app'
], function (Backbone, AppView) {
    'use strict';
    /*jshint nonew:false*/
    // Initialize routing and start Backbone.history()
    //new Workspace();
    //Backbone.history.start();

    // Initialize the application view
    var appView = new AppView();
    appView.render();
});