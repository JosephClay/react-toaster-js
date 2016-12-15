const uniqueId = require('lodash/uniqueId');
const Toaster = require('./src/Toaster.jsx');
const instance = require('./src/instance');
const overload = require('overload-js');

const useInstance = function(fn) {
	return function(...params) {
		const inst = instance.get();
		if (!inst) { return; }
		fn.apply(inst, [...params]);
	};
};

const toast = useInstance(function(obj) {
	const toasts = this.state.toasts.slice();
	const toast = Object.assign({}, this.state, { id: uniqueId() }, obj);
	toasts.push(toast);
	this.setState({ toasts });
});

const generateToastType = type => {
	return overload()
		.args(String)
		.use(function(title) {
			toast({ type, title });
		})
		.args(Object)
		.use(function(obj) {
			toast(Object.assign({ type }, obj));
		})
		.args(String, String)
		.use(function(title, message) {
			toast({ type, title, message });
		})
		.args(String, Object)
		.use(function(title, obj) {
			toast(Object.assign({ type }, obj, { title }));
		})
		.args(String, String, Object)
		.use(function(title, message, obj) {
			toast(Object.assign({ type }, obj, { title, message }));
		});
};

module.exports = Object.assign(generateToastType(), {
	config: useInstance(function(obj) {
		this.setState(Object.assign(this.state, obj));
	}),

	warning: generateToastType('warning'),
	success: generateToastType('success'),
	error: generateToastType('danger'),
	info: generateToastType('info'),

	remove: useInstance(function() {
		const { toasts } = this.state;
		toasts.length = 0;
		this.setState({ toasts });
	}),

	Toaster,
	Component: Toaster,
});