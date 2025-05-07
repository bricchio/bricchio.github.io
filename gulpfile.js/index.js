import gulp from 'gulp';
import webp from 'gulp-webp';



export default () => (
	gulp.src('image-convert/revised/*.{jpg,png}', { encoding: false })
		.pipe(webp())
		.pipe(gulp.dest('./image-convert/webp'))
);

