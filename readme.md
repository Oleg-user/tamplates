### Папка с проектом

    cd /Users/oleg/Dropbox/Sites/tamplates

### Gulp локально
(PATH - переменная для папок поиска команд)

Открывает файл в редакторе:

    nano ~/.profile

Добавляем переменную:

    export PATH=./node_modules/.bin:../node_modules/.bin:../../node_modules/.bin:$PATH

Сохраняем, закрываем, и выполняем следующую команду, чтобы значения данного файла были прочитаны:

    source ~/.profile

Проверяем:

    echo $PATH

### Установка Gulp в папку проекта

    npm i gulp

Gulp v4

    npm uninstall --save-dev gulp
    npm install 'gulpjs/gulp.git#4.0' --save-dev

Создаем package.json

    npm init

## Плагины

### gulp-kit
https://www.npmjs.com/package/gulp-kit

    npm install --save-dev gulp-kit

### gulp-htmlmin - минификация html
https://www.npmjs.com/package/gulp-htmlmin

    npm i gulp-htmlmin --save-dev

### gulp-sass
https://www.npmjs.com/package/gulp-sass/

    npm install --save-dev gulp-sass

### gulp-autoprefixer
https://www.npmjs.com/package/gulp-autoprefixer

    npm install --save-dev gulp-autoprefixer

### gulp-cssnano - минификация css
https://www.npmjs.com/package/gulp-cssnano

    npm install --save-dev gulp-cssnano

### gulp-sourcemaps - создаёт .map файлы
https://www.npmjs.com/package/gulp-sourcemaps

    npm install --save-dev gulp-sourcemaps

### browser-sync
https://www.browsersync.io

    npm install --save-dev browser-sync

### del

    npm install --save-dev del

### gulp-notify - вывод ошибок в всплывающем окне
https://www.npmjs.com/package/gulp-notify

    npm install --save-dev gulp-notify

### gulp-uglify
https://www.npmjs.com/package/gulp-uglify

    npm install --save-dev gulp-uglify

### gulp-concat - соединение css и js файлов в один
https://www.npmjs.com/package/gulp-concat

    npm install --save-dev gulp-concat

### gulp-imagemin - сжатие картинок
https://www.npmjs.com/package/gulp-imagemin

    npm install --save-dev gulp-imagemin

### gulp-svg-sprite
https://github.com/jkphl/gulp-svg-sprite

    npm install --save-dev gulp-svg-sprite

### gulp.spritesmith - спрайты png
https://www.npmjs.com/package/gulp.

    npm install --save-dev gulp.spritesmith

### gulp-ssh — обеспечивает возможность подключения по SSH и SFTP.
https://www.npmjs.com/package/gulp-ssh

    npm install --save-dev gulp-ssh

### gulp-html5-lint
https://www.npmjs.com/package/gulp-html5-lint

    npm install --save-dev gulp-html5-lint

### gulp-stylelint
https://github.com/olegskl/gulp-stylelint
https://habrahabr.ru/post/301594/

    npm install --save-dev gulp-stylelint

### gulp-uncss - удаляет неиспользуемые стили с css
https://www.npmjs.com/package/gulp-uncss

    npm install --save-dev gulp-uncss

### gulp-html-extend - замена kit
https://github.com/FrankFang/gulp-html-extend






## Фреймворки

jquery
https://github.com/jquery/jquery

Tether
https://github.com/HubSpot/tether

WOW
https://github.com/matthieua/WOW

Bootstrap
https://github.com/twbs/bootstrap

Animate.css
https://github.com/daneden/animate.css
