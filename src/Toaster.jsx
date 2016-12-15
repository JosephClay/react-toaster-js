const React = require('react');
const Toast = require('./Toast.jsx');
const instance = require('./instance');

const remove = function(id) {
	const inst = instance.get();
	if (!inst) { return; }

	const toasts = inst.state.toasts;
	inst.setState({ toasts: toasts.filter(item => item.id !== id) });
};

module.exports = class Toaster extends React.Component {
	constructor() {
		super();

		this.state = {
			toasts: [],
			position: 'top-right',
			type: '',
			className: '',
			title: '',
			message: '',
			fade: 5 * 1000,
			duration: 15 * 1000,
			nofade: false,
			persist: false,
			dismissible: true
		};
	}

	componentWillMount() {
		instance.set(this);
	}

	componentWillUnmount() {
		instance.set(undefined);
	}

	render() {
		const {
			toasts,
			position
		} = this.state;

		return (
			<div className="react-toaster" data-mounting={ position }>
				{ toasts.map(data => <Toast {...data} remove={ remove } key={ data.id } />) }
			</div>
		);
	}
};