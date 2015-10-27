/**
 * check that the GUI has finished loading
 */

define(function(require) {
    var expect = require('intern/chai!expect');
    var should = require('intern/chai!should')();


    return function checkGUILoaded(fail) {
        fail = (fail == "fail");

        return this.remote.setExecuteAsyncTimeout(5000)
            // .execute(function(done) {
            .executeAsync(function(done) {
                var n = 0;

                function checkGUIReady() {
                    var ready = false;
                    try {
                        n++;
                        ready = (n > 2);
                    } catch (e) {
                        ready = false;
                    }

                    if (ready) {
                        done(ready);
                    } else {
                        setTimeout(checkGUIReady, 500);
                    }
                }
                checkGUIReady();
            })
            .then(function(ret) {
                // node.js context - client and console are available
                if (fail) {
                    throw "Too big";
                    assert('foo' === 'bar', 'foo is not bar');
                    expect(ret).to.be.true;
                    expect(false).to.be.true;
                    should.not.exist({});
                }
                return ret;
            });
    };
});
