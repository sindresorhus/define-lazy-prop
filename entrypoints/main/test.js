import test from 'ava';
import defineLazyProperty from './index.js';

test('main', t => {
	const object = {};
	let index = 0;

	defineLazyProperty(object, 'x', () => {
		index++;
		return 'foo';
	});

	t.is(object.x, 'foo');
	t.is(object.x, 'foo');
	t.is(index, 1);

	object.x = 'bar';
	t.is(object.x, 'bar');
	t.is(index, 1);
});
