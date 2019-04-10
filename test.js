import test from 'ava';
import defineLazyProp from '.';

test('main', t => {
	const object = {};
	let i = 0;

	defineLazyProp(object, 'x', () => {
		i++;
		return 'foo';
	});

	t.is(object.x, 'foo');
	t.is(object.x, 'foo');
	t.is(i, 1);

	object.x = 'bar';
	t.is(object.x, 'bar');
	t.is(i, 1);
});
