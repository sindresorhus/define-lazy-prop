import test from 'ava';
import m from './';

test(t => {
	const obj = {};
	let i = 0;

	m(obj, 'x', () => {
		i++;
		return 'foo';
	});

	t.is(obj.x, 'foo');
	t.is(obj.x, 'foo');
	t.is(i, 1);

	obj.x = 'bar';
	t.is(obj.x, 'bar');
	t.is(i, 1);
});
