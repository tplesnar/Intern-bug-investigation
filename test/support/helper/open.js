define(function(require) {
	var expect = require('intern/chai!expect');
	var should = require('intern/chai!should');

	return function open(type, page) {
		var url = type === 'url' ? page : this.baseUrl + page;
		return this.remote.get(url);
	};

});
