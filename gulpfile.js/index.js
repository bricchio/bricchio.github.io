import gulp from 'gulp';
import webp from 'gulp-webp';



export default () => (
	gulp.src('image-convert/original/amba.png')
		.pipe(webp())
		.pipe(gulp.dest('./image-convert/new'))
);
