require.config({
    baseUrl: './scripts/',
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

// Require libraries
require(['require', 'lib/chai.js', 'lib/sinon-1.6.0.js' , 'lib/mocha/mocha.js'], function (require, chai, sinon) {

    // Chai
    assert = chai.assert;
    should = chai.should();
    expect = chai.expect;

    // Mocha
    mocha.setup('bdd');

    // Require base tests before starting
    require([
        '../spec/views/tweets',
        '../spec/twitter/api'
    ], function (test) {
        // Start runner
        mocha.run();
    });

});