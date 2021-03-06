var test = require('chai').assert,
    Terror = require('../');

module.exports = {
    stacktrace : function() {
        var FirstError = Terror.create('FirstError', { CODE_ONE : 'code one' }),
            SecondError = FirstError.create('SecondError', { CODE_TWO : 'code two' });

        test.ok( ! /(SecondError\.|Terror|createError)/.test(SecondError.createError(SecondError.CODES.CODE_TWO).stack));
    }
};
