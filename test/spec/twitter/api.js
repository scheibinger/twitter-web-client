define(['jquery', 'twitter/api'], function ($, twitterApi) {
    describe('twitter/api', function () {
        describe('getHomeTimelineTweets', function () {
            var xhr, requests;
            // Use Sinon to replace jQuery's ajax method
            // with a spy. This spy will also come with
            // some success data.
            beforeEach(function () {
                sinon.stub($, 'ajax').yieldsTo('success', {data: "dummy object"});
            });

            // Restore jQuery's ajax method to its
            // original state
            afterEach(function () {
                $.ajax.restore();
            });
            it('should make an ajax call', function (done) {
                twitterApi.getHomeTimelineTweets(sinon.spy(), sinon.spy());
                expect($.ajax.calledOnce).to.be.true;
                done();
            });
        });

    });

});