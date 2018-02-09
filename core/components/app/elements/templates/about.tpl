{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="about innerpage">
    <div class="background-title background-title_about">информация</div>
    <div class="about__intro">
        <div class="container">
            <h1 class="pagetitle pagetitle_about">{$_modx->resource.longtitle ?: $_modx->resource.pagetitle}</h1>
            <div class="about__introtext">
                {$introtext}
                <div class="box-decor box-decor_about-intro"></div>
            </div>
            <div class="about__age">
                Обучение детей<br>
                от 4 лет
            </div>
        </div>
    </div>
    <section class="about__live clearfix">
        <div class="background-title background-title_live">Наша жизнь</div>
        <div class="container">
            <div class="box-decor box-decor_about-live"></div>
            <h2 class="section-title">{$_modx->resource['about_live.heading']}</h2>
            <div class="programm__intro program-intro_about clearfix">
                Занятия способствуют развитию фантазии, воображения и творческого подхода, веру в собственные силы, приобщают ребенка к танцевальному искусству, раскрывая перед ним его многообразие и красоту.
            </div>
            <div class="program-features program-features_about">
                <div class="program-features__years">
                    <span class="program-features__number">12</span> лет работы
                </div>
                <div class="program-features__international">
                    Участие в международных конкурсах
                </div>
                <div class="program-features__reports">
                    <a href="#" class="program-features__concerts">Отчетные концерты</a>
                    <a href="#" class="program-features__lessons">Открытые уроки</a>
                </div>
            </div>
            <div class="about__live-decor">
                <img src="../img/about-live-1.jpg" alt="">
                <img src="../img/about-live-2.jpg" alt="">
            </div>
        </div>
    </section>
    <section class="about__reward">
        <div class="background-title background-title_reward">мы гордимся</div>
        <div class="container">
            <div class="box-decor box-decor_about-rewards"></div> 
            <h2 class="section-title section-title_rewards">{$_modx->resource['about_rewards.heading']}</h2>
            <div class="reward-box">
                <ul class="uk-switcher">
                    {foreach $_modx->resource['about_rewards.slider'] | fromJSON as $row}
                    <li>
                        <div class="reward-box__year">{$row['year']}</div>
                        <div class="reward-box__flex">
                            <div class="reward-box__title">
                                {$row['title']}
                            </div>
                            <div class="reward-box__img">
                                <img src="{$row['image']}" alt="">
                            </div>
                            <div class="reward-box__desc">
                                {$row['text']}
                            </div>
                        </div>
                    </li>
                    {/foreach}
                </ul>  
                <div class="reward-box__control">
                    <ul class="reward-box__control-list" uk-switcher="connect: .reward-box ul">
                        {foreach $_modx->resource['about_rewards.slider'] | fromJSON as $row}
                        <li></li>
                        {/foreach}
                    </ul>
                </div>  
            </div>
        </div>
    </section>
    <section class="about__tutors">
        <div class="background-title background-title_tutors">Наша команда</div>
        <div class="container">
            <h2 class="section-title section-title_tutors">{$_modx->resource['about_tutors.heading']}</h2>
            <ul uk-switcher hidden>
                {foreach $_modx->resource['about_tutors.slider'] | fromJSON as $row}
                <li></li>
                {/foreach}
            </ul>
            <ul class="uk-switcher">
                {foreach $_modx->resource['about_tutors.slider'] | fromJSON as $row}
                <li>
                    <div class="about__tutor-box tutor-box">
                        <div>
                            <div class="tutor-box__img">
                                <img src="{$row['image']}" alt="">
                                <div class="box-decor"></div> 
                            </div>
                            <div class="tutor-box__name">
                                {$row['name']}
                            </div>
                            <div class="tutor-box__vacancy">
                                {$row['position']}
                            </div>
                            <div class="control-buttons">
                                <button class="control-btn control-btn_left" uk-switcher-item="previous">
                                    <svg class="control-btn__arrow  control-btn__arrow_left button-arrow-left" width="24" height="20">
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
                            <div class="tutor-box__title tutor-box__title_about">
                                {$row['title']}
                            </div>
                            <div class="tutor-box__subtitle tutor-box__subtitle_about">
                                {$row['subtitle']}
                            </div>
                            <div class="tutor-box__desc">
                                {$row['text']}
                            </div>
                        </div>
                    </div>
                </li>
                {/foreach}
            </ul>
        </div>
    </section>
    <section class="about__parents clearfix">
        <div class="background-title background-title_parents">Родителям</div>
        <div class="container">
            <div class="box-decor box-decor_about-parents"></div>
            <h2 class="section-title section-title_parents">{$_modx->resource['about_parents.heading']}</h2>
            <div class="parents-box parents-box_about">
                <div class="parents-box__grid parents-box__grid-about">
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="assets/components/app/web/img/fitness.png" alt="">
                        </div>
                        <div class="parent-item__title">
                            Фитнес
                        </div>
                    </div>
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="assets/components/app/web/img/ioga.png" alt=""> 
                        </div>
                        <div class="parent-item__title">
                            Стрейч - йога
                        </div>
                    </div>
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="assets/components/app/web/img/ballet.png" alt=""> 
                        </div>
                        <div class="parent-item__title">
                            Боди - балет
                        </div>
                    </div>
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="assets/components/app/web/img/dances.png" alt="">
                        </div>
                        <div class="parent-item__title">
                            бальные танцы
                        </div>
                    </div>
                </div>
                <div class="parents-box__more parents-box__more_about">
                    + индивидуальные тренировки по всем направлениям
                </div>
            </div>
        </div>
    </section>
    <div class="container"> 
        {'!AjaxForm@Form' | snippet : [
            'emailSubject'  => 'Запись на урок',
            'validate'      => 'nomail:blank,tel:required',
            'form'          => '@FILE chunks/forms/register_about.tpl'
        ]}
    </div>
</main>
<div class="container">
    {include 'file:chunks/partials/aside_about.tpl'}
</div>
{/block}
