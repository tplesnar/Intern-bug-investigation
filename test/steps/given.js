/**
 * given steps
 */

define(function(require) {
    var expect = require('intern/chai!expect');

    return function(library, dictionary) {
        library.
        given(/I open the (url|site) "$string"$/,
            require('test/support/helper/open'))

        .given(/^the element "$string" is( not)* visible$/,
            require('test/support/helper/isVisible'))

        .given(/^I execute async remote function$/,
            require('test/support/helper/checkGUILoaded'))

        .given(/^I execute async remote function and (fail)$/,
            require('test/support/helper/checkGUILoaded'));

    };
});
