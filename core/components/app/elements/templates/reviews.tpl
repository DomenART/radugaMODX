{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="reviews innerpage">
    <div class="background-title">
        о нас говорят
    </div>
    <div class="container">
        <h1 class="pagetitle">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
        <div class="favorite reviews__favorite">
            <div>
                <img src="{$_modx->resource['about_page.image']}" alt="">
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
        <div class="reviews__pool">
            <div id="pdopage">
                <div class="rows">
                    {'!pdoPage' | snippet : [
                        'element' => 'pdoResources',
                        'ajaxMode' => 'button',
                        'sortby' => 'ASC',
                        'limit' => 2,
                        'includeTVs' => 'image',
                        'tvPrefix' => '',
                        'tplRow' => '@FILE chunks/items/review-item.tpl',
                        'tplOuter' => '@INLINE {$rows}'
                    ]}
                </div>  
                {'page.nav' | placeholder}
            </div>
        </div>
    </div>
</main>
<div class="container">
    {include 'file:chunks/partials/aside.tpl'}
</div>
{/block}