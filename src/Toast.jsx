const React = require('react');
const classnames = require('classnames');
const noop = () => {};

module.exports = class Toast extends React.Component {
	constructor() {
		super();

		this.state = {
			active: false,
			fade: false
		};

		this.mouseover = this.mouseover.bind(this);
		this.mouseout = this.mouseout.bind(this);
		this.startOut = this.startOut.bind(this);
		this.endFadeOut = this.endFadeOut.bind(this);
		this.startOut = this.startOut.bind(this);
		this.endIn = this.endIn.bind(this);
		this.endOut = this.endOut.bind(this);
	}

	//
	// kickoff
	//
	componentDidMount() {
		this.startClock();
		this.startIn();
		this.startFadeOut();
	}

	//
	// death
	//
	componentWillUnmount() {
		clearTimeout(this.fadeTimeout);
		clearTimeout(this.clockTimeout);
	}

	//
	// fade
	//
	startFadeOut() {
		const { nofade, fade } = this.props;
		if (nofade) { return; }
		this.fadeTimeout = setTimeout(this.endFadeOut, fade);
	}
	endFadeOut() {
		this.setState({ fade: true });
	}
	startFadeIn() {
		clearTimeout(this.fadeTimeout);
		this.setState({ fade: false });
	}

	//
	// clock
	//
	startClock() {
		const { persist, duration } = this.props;
		if (persist) { return; }
		this.clockTimeout = setTimeout(this.startOut, duration);
	}
	stopClock() {
		clearTimeout(this.clockTimeout);
	}

	//
	// mouse over/out
	//
	mouseover() {
		this.stopClock();
		this.startFadeIn();
	}
	mouseout() {
		this.startClock();
		this.startFadeOut();
	}

	//
	// entrance
	//
	startIn() {
		setTimeout(this.endIn, 0);
	}
	endIn() {
		this.setState({ active: true });
	}

	//
	// exit
	//
	startOut() {
		this.setState({ active: false });
		setTimeout(this.endOut, 300);
	}
	endOut() {
		this.props.remove(this.props.id);
	}

	render() {
		const {
			fade,
			active
		} = this.state;

		const {
			type,
			className,
			title,
			message,
			dismissible
		} = this.props;

		return (
			<div
				className={
					classnames('react-toast', className, {
						active,
						fade,
						dismissible
					})
				}
				data-type={ type }
				aria-live="polite"
				role="alert"
				onMouseOver={ this.mouseover }
				onMouseOut={ this.mouseout }
				onClick={ dismissible ? this.startOut : noop }>

				{title.length ?
				<div className="react-toast-title">
					{ title }
				</div>
				: undefined }

				{message.length ?
				<div className="react-toast-message">
					{ message }
				</div>
				: undefined }
			</div>
		);
	}
};