<article class="review-item">
    <header class="review-item__header">
        <div class="review-item__photo">
            <img src="{$image}" alt="">
        </div>
        <div>
            <div class="review-item__date">
                <time>{$publishedon | date_format: "%m.%Y"}</time>
            </div>
            <div class="review-item__name">
                {$pagetitle}
            </div>
            <div class="review-item__social">
                <a href="#" class="review-item__social-link">
                    <svg width="27" height="15">
                        <use href="#twitter"></use>
                    </svg>
                </a>
                <a href="#" class="review-item__social-link">
                    <svg width="18" height="18">
                        <use href="#google"></use>
                    </svg>
                </a>
                <a href="#" class="review-item__social-link">
                    <svg width="10" height="18">
                        <use href="#odnoklassniki"></use>
                    </svg>
                </a>
            </div>
        </div>
    </header>
    <div class="review-item__text">
        {$content}
    </div>
</article>