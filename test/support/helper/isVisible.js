/**
 * check if element is visible
 */

define(function(require) {
    var expect = require('intern/chai!expect');
    var should = require('intern/chai!should');

    return function isVisible(element, falseCase) {
        return this.remote.findByCssSelector(element)
            .then(
                function(err, visible) {
                    // expect(true).to.be.false;
                    // should.not.exist(err);

                    if (falseCase) {
                        visible.should.not.equal(true,
                            'expected element "' +
                            element + '" not to be visible');
                    } else {
                        visible.should.equal(true,
                            'expected element "' +
                            element + '" to be visible');
                    }

                },
                function(err, visible) {
                    should.not.exist(err);

                    if (falseCase) {
                        visible.should.not.equal(true,
                            'expected element "' +
                            element + '" not to be visible');
                    } else {
                        visible.should.equal(true,
                            'expected element "' +
                            element + '" to be visible');
                    }

                }).end();

    };
});
