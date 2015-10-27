define(function(require) {
    var expect = require('intern/chai!expect');

    return function(library, dictionary) {
        // Access to dictionary for custom definitions.
        dictionary
            .define('LOCALE', /(fr|es|ie)/)
            .define('NUM', /(\d+)/);

        library
            .when("I open Google's $LOCALE search page", function(
                locale) {
                return this.remote.get("http://www.google." +
                    locale + "/");
            })
            .then("the title is $TITLE", function(title) {
                return this.remote
                    .sleep(500)
                    .getPageTitle()
                    .then(function(pageTitle) {
                        expect(pageTitle).to.equal(title);
                    });
            })
            .then("the $ACTION form exists", function(action) {
                return this.remote
                    .findByCssSelector('form[action="/' +
                        action + '"]');
            })
            .when("I search for $TERM", function(term) {
                return this.remote
                    .findByName('q')
                    .click()
                    .type(term + '\n');
            })
            .then("the search for $TERM was made", function(term) {
                var regex = new RegExp('q=' + term);
                return this.remote
                    .sleep(500)
                    .getCurrentUrl()
                    .then(function(url) {
                        expect(url).to.match(new RegExp(
                            'q=' + term));
                    });
            })
            .then("$NUM or more results were returned", function(
                number) {
                return this.remote
                    .findAllByCssSelector('h3.r')
                    .then(function(elements) {
                        expect(elements).to.have.length.of.at
                            .least(parseInt(number));
                    });
            });
    };
});
