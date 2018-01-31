{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="prices innerpage">
    <div class="background-title">
        Цены и акции 
    </div>
    <div class="container">
        <div class="box-decor"></div>
        <h1 class="pagetitle pagetitle_prices">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
        {foreach $_modx->resource.tutors_slider | fromJSON as $row}
            <div class="prices__action">
                {$row['banner']}
            </div>
        {/foreach}
        <!--
        <div class="tab-bar">
            <div class="tab-bar__item tab-bar__item_disabled js-price-control-usman">
                <span>Новая Усмань</span>
            </div>
            <div class="tab-bar__item tab-bar__item_active js-price-control-otradnoe">
                <span>Отрадное</span>
            </div>
        </div> -->
        <div class="tab-bar" uk-switcher>
            <div class="tab-bar__item  js-price-control-usman">
                <span>Новая Усмань</span>
            </div>
            <div class="tab-bar__item  js-price-control-otradnoe">
                <span>Отрадное</span>
            </div>
        </div>
        <div class="prices__table-wrapper uk-switcher">
            {'pdoResources' | snippet : [
                'tpl' => '@FILE chunks/pricelists/table-pricelist.tpl',
                'includeContent' => '1'
            ]}
        </div>
    </div> 
</main>
{/block}