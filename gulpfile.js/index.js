import gulp from 'gulp';
import webp from 'gulp-webp';



export default () => (
	gulp.src('image-convert/original/*.{jpg,png}')
		.pipe(webp())
		.pipe(gulp.dest('image-convert/webp'))
);
