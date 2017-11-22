const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rimraf = require('rimraf');

gulp.task('default', ['build','test']);

gulp.task('test',['eslint','build'],(cb) => {
    console.log('Test is done...');
    cb();
});

gulp.task('eslint',(cb) => {
    console.log('Eslint is done...');
    cb();
});

gulp.task('clean',(cb) => {
    rimraf('lib',(err) => {
        if(err){
            return cb(err);
        }
        cb();
    });
});

gulp.task('build',['eslint'] ,() => {
    let stream = gulp.src('src/**/*.js',{base:'src'})
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.',{
            includeContent:false,
            sourceRoot:'../src' // 没有sourceRoot，vscode无法找到源文件
        }))
        .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('develop',() => {
    gulp.watch('src/**/*.js',['build'],(event) => {
        console.log(`File ${event.path} was ${event.type} , runing tasks...` );
    });
});