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
            <svg class="control-link__tail control-link__tail_left" width="10" height="8">
                <use xlink:href="{$.assets_url}web/img/sprite.svg#two-dot-hor"/>
            </svg>
            <svg class="control-link__arrow control-link__arrow_left control-link__arrow_disabled" width="20" height="20">
                <use xlink:href="{$.assets_url}web/img/sprite.svg#arrow-left"/>
            </svg>
        </a> 
    </div>
</div>