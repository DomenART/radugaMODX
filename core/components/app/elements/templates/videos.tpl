{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="videos innerpage">
    <div class="background-title" uk-scrollspy="cls: uk-animation-slide-right; offset-top: -200">
        информация
    </div>
    <div class="container">
        <h1 class="pagetitle pagetitle_videos">Видео</h1>
        <div class="resources-count">Загружено <b>РУСЛАН, ВЫВЕДИ МЕНЯ!</b> видео</div>
        <div class="videos__favorite favorite">
            <div>
                <iframe width="530" height="298" src="https://www.youtube.com/embed/{$_modx->resource['about_page.video']}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <div class="box-decor"></div> 
            </div>
            <div>
                <div class="favorite__title">
                    {$_modx->resource['about_page.title']}
                </div>
                <div class="favorite__subtitle">
                    {$_modx->resource['about_page.subtitle']}
                </div>
                <div class="favorite__desc">
                    {$_modx->resource['about_page.text']}           
                </div>
            </div>
        </div>
        <div class="videos__pool">
            <div id="pdopage">
                <div class="rows">
                    {'!pdoPage' | snippet : [
                        'element' => 'pdoResources',
                        'ajaxMode' => 'button',
                        'sortby' => 'ASC',
                        'limit' => 2,
                        'tplRow' => '@FILE chunks/items/videos-item.tpl',
                        'tplOuter' => '@INLINE {$rows}'
                    ]}
                </div>  
                {'page.nav' | placeholder}
            </div>
        </div>
        <div class="clearfix">
            <div class="videos__control control-bar">
                <div class="control-bar__control-buttons control-buttons">
                    <button class="control-btn control-btn_left control-btn_disabled">
                        <svg class="control-btn__arrow control-btn__arrow_disabled control-btn__arrow_left btn-arrow-left" width="24" height="20">
                            <use xlink:href="img/sprite.svg#btn-arrow-left"/>
                        </svg>
                    </button>
                    <button class="control-btn control-btn_right">
                        <svg class="control-btn__arrow control-btn__arrow_right btn-arrow-right" width="24px" height="20px">
                            <use xlink:href="img/sprite.svg#btn-arrow-right"/>
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
{include 'file:chunks/partials/aside.tpl'}
{/block}