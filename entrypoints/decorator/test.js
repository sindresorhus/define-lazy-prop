import test from 'ava';
import lazy from './index.js';

class Foo {
	constructor() {
		this.index = 0;
		this.foobar = 'bar';
	}

	@lazy bar() {
		this.index++;
		return this.foobar;
	}
}

test('main', t => {
	const foo = new Foo();

	t.is(foo.index, 0);

	t.is(foo.bar(), 'bar');
	t.is(foo.index, 1);

	foo.foobar = 'baz';
	t.is(foo.bar(), 'baz');
	t.is(foo.index, 1);
});
