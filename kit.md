

## Импорт

Вы можете импортировать любой файл любого типа в файл Kit. Синтаксис похож на CSS:

    <!-- @import "someFile.kit" -->
    <!-- @import "file.html" -->


Если путь импорта начинается с косой черты, Kit будет искать файл относительно корневой папки проекта. В противном случае путь вычисляется относительно файла Kit, содержащего инструкцию @import.

    <!-- Resolved from the project's root folder: -->
    <!-- @import '/someSubfolder/someFile' -->


### Множественный импорт

Вы можете импортировать более одного файла за раз, используя список, разделенный запятыми:

    <!-- @import someFile, otherFile.html, ../thirdFile.kit -->


### «Частичная» Конвенция

Если файл ТОЛЬКО предназначен для импорта в другие, добавьте к имени файла ведущее подчеркивание. Это поможет вам распознать файлы «только для импорта» в Finder. _Вы НЕ должны включать подчеркивание в операторы @import._

Example: suppose a file named master.kit contains this special comment: <!-- @include someFile -->. CodeKit follows this sequence to resolve the import:


## Переменные

Объявление переменной в Kit просто:

    <!-- $width = 40px -->
    <!-- $myVar = We finish each other's sandwiches. -->


В любой момент после объявления мы можем использовать эти переменные следующим образом:

    <body>
      <p> <!-- $myVar --> </p>
      <div style="width: <!--$width-->;"> Stuff </div>
    </body>


И конечный результат будет:

    <body>
      <p> We finish each other's sandwiches. </p>
      <div style="width: 40px;"> Stuff </div>
    </body>


### Одна переменная за комментарий

Вы можете объявлять или использовать только одну переменную в каждом специальном комментарии. Попытка объявить или использовать несколько переменных в одном комментарии приведет к неопределенному поведению.

### Переменные Nil

Вы можете установить значение переменной в «ничего», используя тот же гибкий синтаксис и ключевое слово nil:

    <!-- $myVar = nil -->
    <!--$myVar:nil-->


Переменная, которая установлена на nil, становится по существу "no-op". Ничто не заменит его в выводе HTML.


#### Пример

Набор принимает «необязательный» синтаксис от Swift. Предположим, вы создаете меню навигации. Частичный named nav.kit содержит этот код:

    <dl>
      <dd class='<!-- $myVar? -->'> Page 1 </dd>
      <dd class='<!-- $otherVar? -->'> Page 2 </dd>
    </dl>


Что? После имени переменной означает: «Если эта переменная имеет значение, поместите ее здесь. В противном случае, если переменная не определена, просто пропустите ее».

Вы можете легко использовать это, чтобы добавить «активные» состояния к элементам меню nav. Вот как выглядел бы page1.kit:

    <body>
      ...
        <!-- $myVar = 'nav-menu-active' -->
        <!-- @import _nav.kit -->
      ...
    </body>


Скомпилированный код HTML для страницы 1 будет выглядеть так:

    <body>
      ...
        <dl>
           <dd class='nav-menu-active'> Page 1 </dd>
           <dd class=''> Page 2 </dd>
        </dl>
      ...
    </body>

А затем page2.kit будет содержать:

    <body>
      ...
        <-- $otherVar = 'nav-menu-active' -->
        <-- @import nav.kit -->
      ...
    </body>


И скомпилированный вывод для страницы 2 будет выглядеть так:

    <body>
      ...
        <dl>
           <dd class=''> Page 1 </dd>
           <dd class='nav-menu-active'> Page 2 </dd>
        </dl>
      ...
    </body>

Теперь просто напишите CSS-код, ориентированный на активный класс nav-menu, и все готово!

Примечание. Если вы попытаетесь использовать неопределенную переменную без необязательного оператора, вы получите сообщение об ошибке.


### Область переменной

Переменная может использоваться в любой момент после ее объявления. Это распространяется на импортированные файлы. Если вы объявите переменную в master.kit, а затем импортируете beta.kit, переменная из «master» будет доступна в «beta». В отличие от этого, любые переменные, объявленные в «beta», НЕ будут доступны в «master».
