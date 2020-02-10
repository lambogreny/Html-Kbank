// Requires the gulp plugin
var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Requires the browser-sync plugin
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hi! Its Cork Admin. If you are reading this. It means you have successfully installed task manager and gulp.');
});



/*
	=====================================================================
	=====================================================================
	|																	|
	|	@include ->  Writing GULP-SASS Functions For All Demos 			|
	|																	|
	=====================================================================
	=====================================================================
*/


/*
	===============
		Demo 1
	===============
*/

/* ===== LTR ===== */

gulp.task('demo1:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/demo1/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/demo1/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo1:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/demo1/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/demo1/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo1-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/demo1/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/demo1/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo1-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/demo1/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/demo1/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 2 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo2:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/demo2/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/demo2/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo2:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/demo2/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/demo2/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo2-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/demo2/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/demo2/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo2-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/demo2/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/demo2/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	===============
		Demo 3
	===============
*/

/* ===== LTR ===== */

gulp.task('demo3:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/demo3/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/demo3/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo3:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/demo3/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/demo3/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo3-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/demo3/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/demo3/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo3-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/demo3/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/demo3/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/*
	==================
		Demo 4 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo4:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/demo4/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/demo4/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo4:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/demo4/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/demo4/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo4-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/demo4/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/demo4/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo4-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/demo4/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/demo4/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})



/*
	=====================================================================
	=====================================================================
	|																	|
	|	@include ->  Writing WATCH Functions For All Demos 				|
	|																	|
	=====================================================================
	=====================================================================
*/


/*
	===============
		Demo 1
	===============
*/

/* ===== LTR ===== */

gulp.task('watch:demo1',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/demo1'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/demo1');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/demo1/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/demo1/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/demo1/**/*.scss', gulp.series('demo1:sass:assets', 'demo1:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo1-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/demo1'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/demo1');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/demo1/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/demo1/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/demo1/**/*.scss', gulp.series('demo1-rtl:sass:assets', 'demo1-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 2
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo2',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/demo2'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/demo2');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/demo2/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/demo2/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/demo2/**/*.scss', gulp.series('demo2:sass:assets', 'demo2:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo2-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/demo2'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/demo2');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/demo2/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/demo2/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/demo2/**/*.scss', gulp.series('demo2-rtl:sass:assets', 'demo2-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/*
	===============
		Demo 3
	===============
*/

/* ===== LTR ===== */

gulp.task('watch:demo3',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/demo3'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/demo3');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/demo3/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/demo3/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/demo3/**/*.scss', gulp.series('demo3:sass:assets', 'demo3:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo3-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/demo3'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/demo3');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/demo3/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/demo3/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/demo3/**/*.scss', gulp.series('demo3-rtl:sass:assets', 'demo3-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 4
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo4',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/demo4'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/demo4');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/demo4/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/demo4/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/demo4/**/*.scss', gulp.series('demo4:sass:assets', 'demo4:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo4-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/demo4'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/demo4');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/demo4/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/demo4/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/demo4/**/*.scss', gulp.series('demo4-rtl:sass:assets', 'demo4-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));