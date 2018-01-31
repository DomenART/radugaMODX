<div class="popup hidden"> 
    <div class="photo-popup popup-content">
        <button type="button" class="close-btn"></button>
        <div class="photo-popup__img">
            <img src="{$photo.url}" alt="">
        </div>
        <div class="photo-popup__desc">
            <div class="photo-popup__counter">
                <span>{$photo.rank + 1}}</span> 
                из 
                <span>{$total}</span>
            </div>
            <div class="photo-popup__row">
                <div class="photo-popup__date">
                    <time>{$photo.createdon | strtotime | date_format : '%d.%m.%Y'}</time>
                </div>
                <div class="likes">
                    <svg width="24" height="21">
                        <use href="#like"/> 
                    </svg>
                    147
                </div>
            </div>
            <div class="photo-popup__title">
                {$photo.name}
            </div>
            <div class="photo-popup__text">
                {$photo.description}                </div>
            <div class="photo-popup__share">
                <script src="http://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
                <script src="http://yastatic.net/share2/share.js"></script>
                <div class="photo-popup__share-text">
                    Поделись с друзьями:
                </div>
                <div class="photo-popup__share-bar ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter" data-size="s"></div>                                               
            </div>
        </div>
        {if $prev?}
            <button class="photo-popup__control photo-popup__control_left" data-id="{$prev.id}"></button>
        {/if}
        {if $next?}
            <button class="photo-popup__control photo-popup__control_right" data-id="{$next.id}"></button>
        {/if}
    </div>
</div>   