<div class="news__favorite favorite">
    <div>
        <img src="{$article.image}" alt="">
        <div class="box-decor"></div> 
    </div>
    <div>
        <div class="favorite__title">
            {$pagetitle}
        </div>
        <div class="favorite__subtitle">
            <time>{$publishedon | date_format: "%d.%m.%Y"}</time>
        </div>
        <div class="favorite__desc">
            {$introtext}
        </div>
        <a href="{$uri}" class="favorite__link control-link control-link_right">
            Показать полностью
            <svg width="20" height="20" class="control-link__arrow control-link__arrow_right">
                <use xlink:href="{$.assets_url}web/img/sprite.svg#larrow-right"/>
            </svg>
        </a> 
    </div>
</div>