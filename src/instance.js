let instance;

module.exports = {
	get() {
		return instance;
	},
	set(inst) {
		instance = inst;
	}
};