import {expectType, expectError} from 'tsd';
import defineLazyProperty from './index.js';

const unicorn = {
	foo: 'bar',
};

const rainbowUnicorn = defineLazyProperty(unicorn, 'rainbow', () => 1);

expectType<number>(rainbowUnicorn.rainbow);
expectType<string>(rainbowUnicorn.foo);
expectError(rainbowUnicorn.bar);
