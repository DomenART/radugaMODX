{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="article innerpage_article">
        <div class="background-title">
            Новости
        </div>
        <div class="container">
            <div class="link-control_article control-links">
                <a href="#" class="link-control link-control_left">
                    <svg width="26" height="17" class="link-control__arrow link-control__arrow_left link-control__arrow_disabled">
                        <use xlink:href="img/sprite.svg#link-arrow-left"/>
                    </svg>
                    <span>Предыдущая</span>
                </a>
                <a href="#" class="link-control link-control_right">
                    <span>Следующая</span>
                    <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                        <use xlink:href="img/sprite.svg#link-arrow-right"/>
                    </svg>
                </a>
            </div>
            <article>
                <div class="article__heading">
                    <div class="article__date">

                        <time>{$publishedon | date_format: "%d"} <span>{$publishedon | date_format: "%B"}`&nbsp;&nbsp;{$publishedon | date_format: "%Y"}</span></time>

                    </div>
                    <h1 class="pagetitle pagetitle_article">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
                </div>
                <div class="article__content">
                    <div class="article__image">
                        <img src="../img/article-image.jpg" alt="">
                    </div>
                    <div class="article__aside">
                        <div class="article__social">
                            <div class="likes likes_aside">
                                <svg class="like-icon" width="24" height="21">
                                    <use xlink:href="img/sprite.svg#like"/> 
                                </svg>
                                147
                            </div>
                            <div class="comments">
                                <svg class="comment-icon" width="28" height="22">
                                    <use xlink:href="img/sprite.svg#comment"/> 
                                </svg>
                                12
                            </div>
                        </div>
                        <div class="article__share">
                            <script src="http://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
                            <script src="http://yastatic.net/share2/share.js"></script>
                            <div class="ya-share2 ya-share2_aside ya-share_aside" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter" data-size="s"></div>
                        </div>
                    </div>
                    <div class="article__text">
                        <h2>СЕО-текст (заголовок 2) кегль 32 #000000</h2>
                        <p>
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ (link) жизни. 
                        </p>
                        <h3>Подзаголовок СЕО- текста (заголовок 3) 28</h3>
                        <p>
                            Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. <a href="#">Великий Оксмокс (hover link)</a> предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. 
                        </p>
                        <h6>
                            <p>
                                Колонка для цитат, выносок, интересной тематичной  информации и тд.
                            </p>
                            <p>
                                Оформляестя вместе
                                с обводкой (h6)
                            </p>
                        </h6>
                        <h4>Заголовок 4, 24 px, #000000</h4>
                        <p>
                            По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов (visited link), напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор. 
                        </p>
                        <h5>
                            Маркированные списки - Заголовок 5,  22 px, #000000
                        </h5>
                        <p>
                            <ul class="lovely-list">
                                <li>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</li>
                                <li>Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. </li>
                                <li>Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.</li>
                                <li>Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. </li>
                                <li>Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. </li>
                            </ul>
                        </p>
                        <img src="../img/article-content-image.jpg">
                        <p>
                            Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum; Pешила выйти в большой мир грамматики;
                            Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. 
                        </p>
                        <p>
                            Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. 
                        </p>
                    </div>
                </div>
            </article>
            <div class="article-control">
                <div class="article-control__share">
                    <div class="article-control__share-text">
                        Понравилась статья?<br>
                        Поделись с друзьями:
                    </div>
                    <div>
                        <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter" data-size="s"></div>                            
                    </div>
                </div>
                <div class="article-control__social">
                    <div class="likes likes_control">
                        <svg width="24" height="21" class="like-icon">
                            <use xlink:href="img/sprite.svg#like"/>
                        </svg>
                        147
                    </div>
                    <div class="comments">
                        <svg width="28" height="22" class="comment-icon"> 
                            <use xlink:href="img/sprite.svg#comment"/> 
                        </svg>
                        12
                    </div>
                </div>
                <div class="article-control__neighbors control-links">
                    <a href="#" class="link-control link-control_left">
                        <svg width="26" height="17" class="link-control__arrow link-control__arrow_left">
                            <use xlink:href="img/sprite.svg#link-arrow-left"/>
                        </svg>
                        <span>Предыдущая</span>
                    </a>
                    <a href="#" class="link-control link-control_right">
                        <span>Следующая</span>
                        <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                            <use xlink:href="img/sprite.svg#link-arrow-right"/>
                        </svg>
                    </a>
                </div>
            </div>
            <section class="readmore">
                <div class="readmore__heading">
                    Читайте также:
                </div>
                <div class="readmore__grid">
                    <a href="#" class="article-item">
                        <span class="review-item__date">
                            <time>12 октября 2017</time>
                        </span>
                        <span class="article-item__title">
                            Заголовок новости или статьи 13
                        </span>
                        <span class="review-item__text">
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
                        </span>
                    </a>
                    <a href="#" class="article-item">
                        <span class="review-item__date">
                            <time>12 октября 2017</time>
                        </span>
                        <span class="article-item__title">
                            Заголовок новости или статьи 13
                        </span>
                        <span class="review-item__text">
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
                        </span>
                    </a>
                    <a href="#" class="article-item">
                        <span class="review-item__date">
                            <time>12 октября 2017</time>
                        </span>
                        <span class="article-item__title">
                            Заголовок новости или статьи 13
                        </span>
                        <span class="review-item__text">
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
                        </span>
                    </a>
                </div>
            </section>
        </div>
    </main>
{/block}