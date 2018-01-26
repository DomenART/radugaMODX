{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="tutors innerpage">
    <div class="background-title">
        Наша команда
    </div>
    <div class="container">
        <h1 class="pagetitle">Преподаватели</h1>
        <div class="tutors__tutor-box tutor-box">
            <div>
                <div class="tutor-box__img tutor-box__img_tutors">
                    <img src="../img/tutor.jpg" alt="">
                <div class="box-decor"></div>
                </div>
                <div class="control-buttons">
                    <button class="control-btn control-btn_left control-btn_disabled">
                        <svg class="control-btn__arrow control-btn__arrow_disabled control-btn__arrow_left button-arrow-left" width="24px" height="20px">
                            <use xlink:href="img/sprite.svg#button-arrow-left"/>
                        </svg>
                    </button>
                    <button class="control-btn control-btn_right">
                        <svg class="control-btn__arrow control-btn__arrow_right button-arrow-right" width="24px" height="20px">
                            <use xlink:href="img/sprite.svg#button-arrow-right"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <div class="tutor-box__title">
                    Фамилия Имя Отчество<br>преподавателя
                </div>
                <div class="tutor-box__subtitle">
                    Хавелок Эллис
                </div>
                <div class="tutor-box__text">
                    <p>
                        Текст - информация о преподавателе:<br>
                        Всероссийский Рейтинговый фестиваль - конкурс 
                    </p>
                    <p>
                        <b>"Сделано в России"</b> г. Санкт-Петербург; Международный конкурс - фестиваль детского и юношеского творчества 
                    </p>
                    <p>
                        <b>"Московское время"</b> г. Москва;<br> Международный конкурс - фестиваль детского юношеского творчества <b>"На берегах Невы"</b> г. Москва;<br>
                    </p>
                    <p> 
                        Чемпионат и Первенство ЦФО по современным танцевальным направлениям, г. Орел.
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>
{/block}