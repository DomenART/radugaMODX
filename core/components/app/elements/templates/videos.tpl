{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="videos innerpage">
    <div class="background-title">
        информация
    </div>
    <div class="container">
        <h1 class="pagetitle pagetitle_videos">Видео</h1>
        <div class="resources-count">Загружено <b>25</b> видео</div>
        <div class="videos__favorite favorite">
            <div>
                <iframe width="530" height="298" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <div class="box-decor"></div> 
            </div>
            <div>
                <div class="favorite__title">
                    Название презентационного<br> видеоролика
                </div>
                <div class="favorite__subtitle">
                    <time>14.11.2017</time> - дата съемки
                </div>
                <div class="favorite__desc">
                        Краткое описание ролика, Международный конкурс - фестиваль детского юношеского творчества "На берегах Невы"г. Москва; Чемпионат и Первенство ЦФО по современным танцевальным направлениям, г. Орел.
                </div>
            </div>
        </div>
        <div class="videos__pool">
            <div>
                <iframe width="550" height="308" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="550" height="308" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="550" height="308" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="550" height="308" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="550" height="308" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="550" height="308" src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="clearfix">
            <div class="videos__control control-bar">
                <div class="control-bar__control-buttons control-buttons">
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
                <div class="link-control control-links">
                    <a href="#" class="link-control link-control_left">
                        <svg width="26" height="17" class="link-control__arrow link-control__arrow_left link-control__arrow_disabled">
                            <use xlink:href="img/sprite.svg#link-arrow-left"/>
                        </svg>
                        <span>В начало</span>
                    </a>
                    <a href="#" class="link-control link-control_right">
                        <span>Показать все</span>
                        <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                            <use xlink:href="img/sprite.svg#link-arrow-right"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>
{/block}