{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="category innerpage">
    <div class="background-title">
        Фотоальбом
    </div>
    <div class="container">
        <h1 class="pagetitle pagetitle_videos">Название категории<br>фотоальбома</h1>
        <div class="resources-count">В этом альбоме <b>37</b> фото</div>
        <div class="category__favorite favorite">
            <div>
                <img src="../img/reviews-intro.jpg" alt="">    
                <div class="box-decor"></div>             
            </div>
            <div>
                <div class="favorite__title">
                    Танец - самое возвышенное, самое трогательное и прекрасное
                    из искусств, потому что это не просто выражение или отвлечение от жизни, это сама жизнь.
                </div>
                <div class="favorite__subtitle">
                    Хавелок Эллис
                </div>
            </div>
        </div>
        <div class="category__pool">
            <div class="photo-item">
                <img src="../img/photo-1.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-2.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-3.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-4.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-5.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-6.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-1.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-2.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
            <div class="photo-item">
                <img src="../img/photo-3.jpg" alt="">
                <div class="photo-item__hovered">
                    <div class="photo-item__title">
                        Название фотографии
                        в наведенном состоянии
                    </div>
                    <button type="button" class="play-btn">+</button>
                </div>
            </div>
        </div>
    </div>
    <div class="popup hidden"> 
        <div class="photo-popup popup-content">
            <button type="button" class="close-btn"></button>
            <div class="photo-popup__img">
                <img src="../img/photo-popup.jpg" alt="">
            </div>
            <div class="photo-popup__desc">
                <div class="photo-popup__counter">
                    <span>3</span> 
                    из 
                    <span>19</span>
                </div>
                <div class="photo-popup__row">
                    <div class="photo-popup__date">
                        <time>12.11.2017</time>
                    </div>
                    <div class="likes">
                        <svg width="24" height="21">
                            <use href="#like"/> 
                        </svg>
                        147
                    </div>
                </div>
                <div class="photo-popup__title">
                    Название фотографии, длина названия в полноразмерном просмотре не ограничивается
                </div>
                <div class="photo-popup__text">
                    Описание фотографии, если есть, если нет, текстовый блок просто не выводится. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. 
                </div>
                <div class="photo-popup__share">
                    <script src="http://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
                    <script src="http://yastatic.net/share2/share.js"></script>
                    <div class="photo-popup__share-text">
                        Поделись с друзьями:
                    </div>
                    <div class="photo-popup__share-bar ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter" data-size="s"></div>                                               
                </div>
            </div>
            <button class="photo-popup__control photo-popup__control_left"></button>
            <button class="photo-popup__control photo-popup__control_right"></button>
        </div>
    </div>   
</main>
{/block}