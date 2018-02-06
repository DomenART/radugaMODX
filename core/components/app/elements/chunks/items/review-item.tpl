<article class="review-item">
    <header class="review-item__header">
        <div class="review-item__photo">
            <img src="{$_pls['review.photo']}" alt="">
        </div>
        <div>
            <div class="review-item__date">
                <time>{$publishedon | date_format: "%m.%Y"}</time>
            </div>
            <div class="review-item__name">
                {$pagetitle}
            </div>
            <div class="review-item__social">
                {foreach $_pls['review.social'] as $row}
                <a href="{$row['link']}" class="review-item__social-link"></a>
                {/foreach}
            </div>
        </div>
    </header>
    <div class="review-item__text">
        {$content}
    </div>
</article>