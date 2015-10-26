var gulp = require('gulp'),
		jade = require('gulp-jade'),
		sass = require('gulp-ruby-sass'),
		browserSync = require('browser-sync').create();

// Jade
gulp.task('jade', function(){
	gulp.src('index.jade')
			.pipe(jade({
				pretty: true
			}))
			.pipe(gulp.dest('.')); // Output the file in the current folder with the same name.
});

// Browser Sync
gulp.task('serve', function(){

	browserSync.init({
		server: "."
	});

	gulp.watch('*').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);