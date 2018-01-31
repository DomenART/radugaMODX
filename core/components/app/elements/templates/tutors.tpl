{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="tutors innerpage">
    <div class="background-title">
        Наша команда
    </div>
    <div class="container">
        <h1 class="pagetitle">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
        <ul uk-switcher hidden>
            {foreach $_modx->resource.tutors_slider | fromJSON as $row}
                <li></li>
            {/foreach}
        </ul>
        <ul class="uk-switcher">
            {foreach $_modx->resource.tutors_slider | fromJSON as $row}
                <li>
                    <div class="tutors__tutor-box tutor-box">
                        <div>
                            <div class="tutor-box__img tutor-box__img_tutors">
                                <img src="{$row['image']}" alt="">
                                <div class="box-decor"></div>
                            </div>
                            <div class="control-buttons">
                                <button class="control-btn control-btn_left" uk-switcher-item="previous">
                                    <svg class="control-btn__arrow control-btn__arrow_disabled control-btn__arrow_left button-arrow-left" width="24" height="20">
                                        <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-left"/>
                                    </svg>
                                </button>
                                <button class="control-btn control-btn_right" uk-switcher-item="next">
                                    <svg class="control-btn__arrow control-btn__arrow_right button-arrow-right" width="24" height="20">
                                        <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-right"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div class="tutor-box__title">
                                {$row['name']}
                            </div>
                            <div class="tutor-box__text">
                                {$row['text']}
                            </div>
                        </div>
                    </div>
                </li>
            {/foreach}
        </ul>
    </div>
</main>
<div class="container">
    {include 'file:chunks/partials/aside.tpl'}
</div>
{/block}