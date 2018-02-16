<article class="home-reviews-item">
    <div class="home-reviews-item__photo">
        <img src="{$_pls['review.photo']}" alt="">
    </div>
    <div class="home-reviews-item__caption">
        <div class="home-reviews-item__name">
            {$pagetitle}
        </div>
        <div class="home-reviews-item__text">
            {$content}
        </div>
        <span class="control-link control-link_right">
            <span>Показать полностью</span>
            <svg class="control-link__arrow" width="28" height="14">
                <use xlink:href="{$.assets_url}/web/img/sprite.svg#arrow-right"/>
            </svg>
        </span>
    </div>
</article>