let mix = require('laravel-mix');

// compiling scss and js codes to /public/ app.css and app.js 
mix.js('resources/js/app.js','public/js/app.js').sass('resources/scss/app.scss','public/css/app.css');