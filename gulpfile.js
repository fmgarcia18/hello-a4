const gulp = require('gulp');
const babel = requiere('gulp-babel');

// Gulp dependencies go here

gulp.task('default', function(){

	// Node source
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	// browse source
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
})