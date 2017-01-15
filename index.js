'use strict';
module.exports = (obj, prop, fn) => {
	const define = value => Object.defineProperty(obj, prop, {value, enumerable: true, writable: true});

	Object.defineProperty(obj, prop, {
		configurable: true,
		enumerable: true,
		get() {
			const ret = fn();
			define(ret);
			return ret;
		},
		set(val) {
			define(val);
		}
	});

	return obj;
};
