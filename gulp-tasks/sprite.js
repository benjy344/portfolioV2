let gulp        = require('gulp');
let config      = require('./config.js');
let spritesmith = require('gulp.spritesmith');


let spriteError;
let finishedTasks;
let totalTasks;
let _spriteTab;



function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function onSubtaskEnd(cb) {
	finishedTasks++;
	if (finishedTasks === totalTasks || spriteError)
		cb(spriteError ? 'Error' : 0);
}

function onError() {
	spriteError = 1;
}

function spriteTask(spriteTab, callback) {
	totalTasks = spriteTab.length * 2;

	spriteTab.forEach(function(element) {
		// Generate our spritesheet
		let spriteData = gulp.src(config.paths.sprites+''+element.spritePath+'/**/*.*').pipe(spritesmith({
			retinaSrcFilter: config.paths.sprites+'/'+element.spritePath+'/*.*',
			imgName:         'spritesheet-'+element.spriteName+'.png',
			imgPath:         config.paths.cssRelativeSprites+'spritesheet-'+element.spriteName+'.png',
            retinaImgName:   'spritesheet-'+element.spriteName+'@2x.png',
            retinaImgPath:   config.paths.cssRelativeSprites+'spritesheet-'+element.spriteName+'@2x.png',
			cssName:         '_spritesheet-'+element.spriteName+'.scss'
		}));

		// Pipe image stream through image optimizer and onto disk
		spriteData.img
		.pipe(gulp.dest(config.paths.sprites))
		.on('error', onError)
		.on('end', () => { onSubtaskEnd(callback); });

		// Pipe CSS stream through CSS optimizer and onto disk
		spriteData.css
		.pipe(gulp.dest(config.paths.scss+'spritesheets/'))
		.on('error', onError)
		.on('end', () => { onSubtaskEnd(callback); });

	});

};

module.exports = function(callback, spriteTab) {
	_spriteTab = spriteTab;

	spriteError = 0;
	finishedTasks = 0;
	
	spriteTask(_spriteTab, callback);

};