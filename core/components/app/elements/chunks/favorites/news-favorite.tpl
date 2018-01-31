<div class="news__favorite favorite">
    <div>
        <img src="{$image}" alt="">
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
        <a href="{$uri}" class="favorite__link link-control link-control_right">
            <span>Показать полностью</span>
            <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
            </svg>
        </a> 
    </div>
</div>