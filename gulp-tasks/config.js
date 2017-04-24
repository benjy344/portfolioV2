let config= {

    paths: {
        js: './assets/js/',
        scss: './assets/scss/',
        css: './assets/css/',
        dist: './dist/',
        fonts: './assets/fonts/',
        cssRelativeFonts: '../fonts/',
        svg: './assets/img/svg/',
        templates: './assets/templates/'
    },

    input: {
        js: {
            app: 'app.js'
        },
        scss: {
            app: 'style.scss'            
        }
    },

    output: {
        js: {
            app: 'script.js',
        },
        css: {
            app: 'style.css'            
        }
    }

};

/* Handlebars is imported as window.diorV7.Handlebars */
config.globs = {
    libsConcat: [
        config.paths.js+'libs/**/*.js',
        '!'+config.paths.js+'libs/0-jquery-3.1.1.min.js',
    ],
    jshint: [
        config.paths.js+'**/*.js',        
    ]
};



module.exports = config;