const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const through = require('through2');
const gulpUtil = require('gulp-util');

const log = Object.assign(message => {
	return through.obj(function(file, enc, callback) {
		this.push(file);
		gulpUtil.log(message);
		callback();
	});
}, {
	err(message) {
		return e => {
			gulpUtil.log(message);
			gulpUtil.beep();
			throw e;
		};
	}
});

gulp.task('default', () => {
	return browserify('./test/test.js', {
		cache: {},
		packageCache: {},
		debug: true,
		standalone: 'toaster'
	})
	.transform(babelify)
	.bundle()
	.on('error', log.err('err: scripts'))
	.pipe(source('test.js'))
	.pipe(gulp.dest('./bin'))
	.pipe(log('success'));
});
