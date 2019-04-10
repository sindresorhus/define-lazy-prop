import {expectType, expectError} from 'tsd';
import defineLazyProp = require('.');

const unicorn = {
	foo: 'bar'
};

const rainbowUnicorn = defineLazyProp(unicorn, 'rainbow', () => 1);

expectType<number>(rainbowUnicorn.rainbow);
expectType<string>(rainbowUnicorn.foo);
expectError(rainbowUnicorn.bar);
