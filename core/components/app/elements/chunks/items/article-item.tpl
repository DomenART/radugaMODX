<a href="{$uri}" class="article-item">
    <span class="article-item__date">
        <time>{$publishedon | date_format: "%d.%m.%Y"}</time>
    </span>
    <span class="article-item__title">
        {$pagetitle}
    </span>
    <span class="article-item__text">
        {$intro}
    </span>
    <span class="article-item__img">
        <img src="{$image}" alt="">
    </span>
</a>