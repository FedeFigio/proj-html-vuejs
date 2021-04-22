let mix = require('laravel-mix');
mix.setPublicPath('dist')
mix.js('src/js/app.js', 'dist/js').setPublicPath('dist')
    .sass('src/scss/app.scss', 'dist/css')
    .copy('src/img', 'dist/img')
    .options({
        processCssUrls: false
    })