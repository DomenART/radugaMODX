{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="news innerpage">
    <div class="background-title">
        информация
    </div>
    <div class="container">
        <h1 class="pagetitle">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
        {'pdoResources' | snippet: [
            'includeTVs' => 'image, favorite',
            'tvPrefix' => '',
            'tpl' => '@FILE chunks/favorites/news-favorite.tpl',
            'limit' => 1,
            'where' => ['favorite' => 1 ]
        ]}
        <div class="news__pool">
            <div id="pdopage">
                <div class="rows">
                    {'!pdoPage' | snippet : [
                        'element' => 'pdoResources',
                        'ajaxMode' => 'button',
                        'sortby' => 'ASC',
                        'limit' => 2,
                        'includeTVs' => 'image',
                        'tvPrefix' => '',
                        'tplRow' => '@FILE  chunks/items/article-item.tpl',
                        'tplOuter' => '@INLINE {$rows}'
                    ]}
                </div>  
                {'page.nav' | placeholder}
            </div>
        </div>
        <div class="news__control control-bar">
            <div class="control-bar__control-buttons control-buttons">
                <button class="control-btn control-btn_left control-btn_disabled">
                    <svg class="control-btn__arrow control-btn__arrow_disabled control-btn__arrow_left button-arrow-left" width="24px" height="20px">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-left"/>
                    </svg>
                </button>
                <button class="control-btn control-btn_right">
                    <svg class="control-btn__arrow control-btn__arrow_right button-arrow-right" width="24px" height="20px">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-right"/>
                    </svg>
                </button>
            </div>
            <div class="link-control control-links">
                <a href="#" class="link-control link-control_left">
                    <svg width="26" height="17" class="link-control__arrow link-control__arrow_left link-control__arrow_disabled">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-left"/>
                    </svg>
                    <span>В начало</span>
                </a>
                <a href="#" class="link-control link-control_right">
                    <span>Показать все</span>
                    <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
                    </svg>
                </a>
            </div>
        </div>         
    </div>
</main>
{/block}
