let css       = require('./css.js');
let async     = require('async');
let minifyImg = require('./minifyImg.js');
let clean     = require('./clean.js');
let sprite    = require('./sprite.js');
let Logger    = require('./logger.js');
let config    = require('./config.js');


let logger = new Logger('SPRITES');

let fs        = require('fs');
let path      = require('path');
let spriteTab = [];

function getDirectories(srcpath) {
  	return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

let spriteFolder =  getDirectories(config.paths.sprites);



module.exports = (callback) => {

	for (let i = 0; i < spriteFolder.length; i++) {
	    spriteTab.push({
	        spriteName : spriteFolder[i],
	        spritePath : spriteFolder[i]
	    });
	}
	
	async.series(
		[
		(cb) => {
			minifyImg((err) => {
				if (err) return cb(err);
				cb();
			}, spriteTab);
		},
		(cb) => {
			sprite((err) => {
				if (err) return cb(err);
				cb();
			}, spriteTab);
		},
		(cb) => {
			clean((err) => {
				if (err) return cb(err);
				cb();
			});
		}
		],
		(error) => {
			if (error) {
				logger.error( error.red);
			} else {
				logger.success( 'Spritesheets built successfully');
				callback();
			}
		})

};