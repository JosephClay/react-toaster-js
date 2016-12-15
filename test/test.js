const React = require('react');
const ReactDOM = require('react-dom');
const toaster = require('../index');
const { Toaster } = require('../index');
const mount = document.querySelector('#mount');
const $ = function(selector, fn) {
	document.querySelector(selector).addEventListener('click', fn);
};
const defaults = {
	title: 'hello world',
	message: 'i are toast'
};

ReactDOM.render(React.createElement(Toaster, null), mount);

$('[data-standard]', function() {
	toaster(defaults);
});

$('[data-no-title]', function() {
	toaster({ message: defaults.message });
});

$('[data-no-message]', function() {
	toaster({ title: defaults.title });
});

$('[data-warning]', function() {
	toaster.warning(defaults);
});

$('[data-success]', function() {
	toaster.success(defaults);
});

$('[data-error]', function() {
	toaster.error(defaults);
});

$('[data-info]', function() {
	toaster.info(defaults);
});

$('[data-not-dismissible]', function() {
	toaster(Object.assign({}, defaults, {
		dismissible: false
	}));
});

$('[data-persist]', function() {
	toaster(Object.assign({}, defaults, {
		persist: false
	}));
});

$('[data-no-fade]', function() {
	toaster(Object.assign({}, defaults, {
		nofade: true
	}));
});


$('[data-top-right]', function() {
	toaster.config({ position: 'top-right' });
	toaster(defaults);
});

$('[data-top-left]', function() {
	toaster.config({ position: 'top-left' });
	toaster(defaults);
});

$('[data-bottom-right]', function() {
	toaster.config({ position: 'bottom-right' });
	toaster(defaults);
});

$('[data-bottom-left]', function() {
	toaster.config({ position: 'bottom-left' });
	toaster(defaults);
});

$('[data-remove]', function() {
	toaster.remove();
});
