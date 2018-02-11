{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="article innerpage_article">
    <div class="background-title" uk-scrollspy="cls: uk-animation-slide-right; offset-top: -200">
        Новости
    </div>
    <div class="container">
        {'pdoNeighbors' | snippet : [
            'tplPrev' => '@INLINE  
                <a href="/{$uri}" class="link-control link-control_left">
                    <svg width="26" height="17" class="link-control__arrow link-control__arrow_left link-control__arrow_disabled">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-left"/>
                    </svg>
                    <span>Предыдущая</span>
                </a>',
            'tplNext' => '@INLINE  
                <a href="/{$uri}" class="link-control link-control_right">
                    <span>Следующая</span>
                    <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
                    </svg>
                </a>',
            'tplWrapper' => '@INLINE <div class="link-control_article control-links">{$prev}{$next}</div>'
        ]}
        <article>
            <div class="article__heading">
                <div class="article__date">
                    <time>{$publishedon | date_format: "%d"} <span>{$publishedon | date_format: "%B"}`&nbsp;&nbsp;{$publishedon | date_format: "%y"}</span></time>
                </div>
                <h1 class="pagetitle pagetitle_article">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
            </div>
            <div class="article__content">
                <div class="article__image">
                    <img src="{$_modx->resource['image']}" alt="">
                </div>
                <div class="article__aside">
                    <div class="article__social">
                        <div class="likes likes_aside">
                            <svg class="like-icon" width="24" height="21">
                                <use xlink:href="assets/components/app/web/img/sprite.svg#like"/> 
                            </svg>
                            147
                        </div>
                        <div class="comments">
                            <svg class="comment-icon" width="28" height="22">
                                <use xlink:href="assets/components/app/web/img/sprite.svg#comment"/> 
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
                <div class="article__text clearfix">
                    {$_modx->resource.content}
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
                        <use xlink:href="assets/components/app/web/img/sprite.svg#like"/>
                    </svg>
                    147
                </div>
                <div class="comments">
                    <svg width="28" height="22" class="comment-icon"> 
                        <use xlink:href="assets/components/app/web/img/sprite.svg#comment"/> 
                    </svg>
                    12
                </div>
            </div>
            {'pdoNeighbors' | snippet : [
                'tplPrev' => '@INLINE  
                    <a href="#" class="link-control link-control_left">
                        <svg width="26" height="17" class="link-control__arrow link-control__arrow_left">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-left"/>
                        </svg>
                        <span>Предыдущая</span>
                    </a>',
                'tplNext' => '@INLINE  
                    <a href="#" class="link-control link-control_right">
                        <span>Следующая</span>
                        <svg width="26" height="17" class="link-control__arrow link-control__arrow_right">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
                        </svg>
                    </a>',
                'tplWrapper' => '@INLINE <div class="article-control__neighbors control-links">{$prev}{$next}</div>'
            ]}
        </div>
        <section class="readmore">
            <div class="readmore__heading">
                Читайте также:
            </div>
            <div class="readmore__grid">
                {'pdoResources' | snippet : [
                    'parents' => $_modx->resource.parent,
                    'limit' => 3,
                    'sortby' => 'RAND()',
                    'tpl' => '@FILE chunks/items/article-item.tpl',
                    'includeTVs' => 'article_image',
                    'tvPrefix' => '',
                    'resources' => '-' ~ $_modx->resource.id
                ]}
            </div>
        </section>
    </div>


</main>
{/block}