/**
 * Responsible for fetching data from external Twitter Api
 * @class Api
 */
define(['jquery'], function ($) {
    'use strict';

    //private variables - hiding implementation
    var host = 'http://127.0.0.1:9000',
        callApi = function (url, method, successCallback, errorCallback) {
            $.ajax({
                url: host + url,
                dataType: "json",
                timeout: 15000,
                success: function (data) {
                    // parse data here
                    console.log(data);
                    successCallback(data);
                },

                error: function (err) {
                    errorCallback(err);
                }
            });
        };

    //public variables
    return {
        searchTweets: function (query, successCallback, errorCallback) {
            var url = '/api/search/tweets/' + query;
            callApi(url, 'GET', successCallback, errorCallback);
        },
        getUser: function (successCallback, errorCallback) {
            var url = '/api/get_user';
            callApi(url, 'GET', successCallback, errorCallback);
        },
        /**
         *
         * @param successCallback
         * @param errorCallback
         * @optional
         * @param lastId
         */
        getHomeTimelineTweets: function (successCallback, errorCallback, lastId) {
            var url = '/api/home_timeline';
            callApi(url, 'GET', successCallback, errorCallback);
        },

        /**
         *
         * @param successCallback
         * @param errorCallback
         * @optional
         * @param lastId
         */
        getUserTimelineTweets: function (successCallback, errorCallback, lastId) {
            var url = '/api/user_timeline';
            callApi(url, 'GET', successCallback, errorCallback);
        }
    };
});