let async    = require('async');
//let copy     = require('./copy.js');
let css      = require('./css.js');
let iconfont = require('./iconfont.js');
let Logger   =  require('./logger.js');
//let sprites  = require('./sprites.js');

let logger = new Logger('RELEASE');

module.exports = (callback) => {

    async.series(
        [
            // Font Icons
            (cb) => {
                iconfont( err => {
                    if (err) return cb(err);
                    cb();
                });
            },

            // Sprites
            // (cb) => {
            //     sprites( err => {
            //         if (err) return cb(err);
            //         cb();
            //     });
            // },

            // Compass
            (cb) => {
                css( err => {
                    if (err) return cb(err);
                    cb();
                });
            }
        ],
        (error) => {
            if (error) {
                logger.error( error.red);
            }

            callback();
        });
};