define(['jquery', 'backbone', 'views/tweets', 'collections/tweets'], function ($, backbone, TweetsView, TweetsCollection) {
    describe('views/tweets', function () {
        describe('constructor', function () {
            it('should create a Backbone view', function () {
                var TweetsCollectionMock = TweetsCollection.extend({
                    fetch: function () {
                    }
                })
                var tweetsCollectionMock = new TweetsCollectionMock();

                var tweetsView = new TweetsView({
                    el: $('div'),
                    tweetsCollection: tweetsCollectionMock
                });

                tweetsView.should.be.an.instanceOf(backbone.View);
            });
        })

    });

});