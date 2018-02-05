{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="routes innerpage">
    <div class="background-title">
        В программе<br>
        обучения
    </div>
    <div class="container">
        <h1 class="pagetitle">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
        <div class="routes__favorite favorite">
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
        <div class="routes__pool">
            {'pdoResources' | snippet : [
                'tpl' => '@FILE chunks/items/route-item.tpl',
                'sortby' => 'menuindex',
                'sortdir' => 'ASC',

             ]}
        </div>
    </div>
</main>
<div class="container">
    {include 'file:chunks/partials/aside.tpl'}
</div>
{/block}