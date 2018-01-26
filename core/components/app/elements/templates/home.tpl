{extends 'file:templates/base.tpl'}
{block 'header'}
    {include 'file:chunks/partials/header_homepage.tpl'}
{/block}
{block 'menubar'}
    {include 'file:chunks/partials/menubar_homepage.tpl'}
{/block}
{block 'content'}
<main class="homepage">
    <section class="intro">
        <div class="intro__container">
            <div class="intro__logo">
                <span>детский хореографический ансамбль</span>
                <svg class="svg-logo" width="330" height="160">
                    <use xlink:href="assets/components/app/web/img/sprite.svg#logo" />
                </svg>
            </div>
            <nav class="intro-nav">
                <ul class="intro-nav__major">
                    <li>
                        <a href="#">Об Ансамбле</a>
                    </li>
                    <li aria-hidden="true">
                        <svg class="intro-nav__dot-vertical" width="5" height="20">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#three-circles" />
                        </svg>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <ul class="intro-nav__minor">
                    <li>
                        <a href="#">Направления</a>
                    </li>
                    <li>
                        <a href="#">Расписание</a>
                    </li>
                    <li>
                        <a href="#">Тренировки&nbsp;с&nbsp;родителями</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="enroll" hidden>
            <button type="button" class="form-close js-close"></button>
            <div class="enroll__title">
                Записаться<br>
                на урок
            </div>
            <form id="enroll" action="" method="post" class="js-form">
                <div>
                    <input type="text" class="input" name="name" placeholder="Имя:">
                </div>
                <div>
                    <input type="tel" class="input" name="tel" pattern="^[ 0-9]+$" minlength="8" placeholder="Телефон*:" required>
                </div>
                <div>
                    <textarea class="textarea" placeholder="Сообщение*:" required></textarea>
                </div>
                <div class="enroll__agreement">
                    <input type="checkbox" class="check" name="agreement" id="agreement" hidden required checked>
                    <label for="agreement" class="check-lovely"></label>
                    <label for="agreement" class="agreement-text">
                        Прочитал(-а) пользовательское соглашение 
                        и соглашаюсь на <a href="#">обработку своих <br>персональных данных</a>
                    </label>
                </div>
                <button type="submit" class="btn-more submit">
                    <span>Записаться</span>
                    <svg class="btn-more__arrow" width="38" height="20">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-right"/>
                    </svg>
                </button>
                <div class="agreement__tip">
                    Поля, отмеченные *, обязательны для заполнения
                </div>
            </form>
            <div class="enroll-success" hidden>
                <div class="enroll-success__major-text">
                    Ваше сообщение успешно отправлено,
                </div>
                <div class="enroll-success__minor-text">
                    в ближайшее время мы свяжемся с вами.
                </div>
                <div class="enroll-success__logo"></div>
            </div>
        </div>
    </section>
    <section class="ensemble">
        <h2 class="ensemble__background-title">Об ансамбле</h2>
        <div class="container">
            <div class="ensemble__heading">
                Хореографический ансамбль "Радуга" создан в 2005 году. За короткое время мы успели побывать на международных фестивалях:  
            </div>
            <div class="ensemble__grid">
                <div>
                    <ul class="ensemble__list lovely-list lovely-list_homepage">
                        <li>Всероссийский Рейтинговый фестиваль - конкурс <b>"Сделано в России"</b>
                            г. Санкт-Петербург;</li>
                        <li>Международный конкурс - фестиваль детского
                            и юношеского творчества <b>"Московское время"</b>
                            г. Москва;</li>
                        <li>Международный конкурс - фестиваль детского юношеского творчества <b>"На берегах Невы"</b>
                            г. Москва;</li>
                        <li>Чемпионат и Первенство ЦФО по современным танцевальным направлениям, г. Орел.</li> 
                    </ul> 
                    <a href="#" class="btn-more btn-more_ensemble">
                        <span>Подробнее</span> 
                        <svg class="btn-more__arrow " width="38" height="20">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-right"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <iframe width="560" height="315"  class="ensemble__video"src="https://www.youtube.com/embed/etAXXbJ9d3s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <div class="ensemble__about">
                        В хореографическом ансамбле дети приобщаются к искусству танца, знакомясь с классическим балетом; источниками танцевальной культуры; самобытностью национальных танцев мира, связанных с жизненным укладом народов; современной музыкой; эстрадным танцем и др. 
                    </div>
                </div>  
            </div>
        </div>
        <div class="link-box js-ensemble-links">       
            <div>
                <a href="#" class="link-object link-object_first">
                    <img src="assets/components/app/web/img/home-tutor.jpg" class="js-ensemble-tutors-image" alt="">
                    <span class="link-object__title js-ensemble-tutors-title">
                        Категория
                        <svg width="4" height="28"> 
                            <use xlink:href="assets/components/app/web/assets/components/app/web/img/sprite.svg#four-circles"/>
                        </svg>
                    </span>
                </a>
            </div>    
            <div>
                <a href="#" class="link-object link-object_second">
                    <img src="assets/components/app/web/img/home-album.jpg" class="js-ensemble-photoalbum-image" alt="">
                    <span class="link-object__title js-ensemble-photoalbum-title">
                        Категория
                        <svg width="4" height="28"> 
                            <use xlink:href="assets/components/app/web/assets/components/app/web/img/sprite.svg#four-circles"/>
                        </svg>
                    </span>
                </a>
            </div> 
            <div>
                <a href="#" class="link-object link-object_third">
                    <img src="assets/components/app/web/img/home-video.jpg" class="js-ensemble-videos-image" alt="">
                    <span class="link-object__title js-ensemble-videos-title">
                        Категория
                        <svg width="4" height="28">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#four-circles"/>
                        </svg>
                    </span>
                </a>
            </div>   
        </div>
    </section>
    <section class="program">
        <div class="container">
            <div class="program__dancegirl">
                <img src="assets/components/app/web/img/dancegirl.png" alt="">
            </div>
            <h2 class="program__title">В <span>нашей</span> программе обучения</h2>
            <div class="programm__intro clearfix">
                Занятия способствуют развитию фантазии, воображения и творческого подхода, веру в собственные силы, приобщают ребенка к танцевальному искусству, раскрывая перед ним его многообразие и красоту.
            </div>
            <ul class="program__list">
                <li>Гимнастика</li>
                <li>Классическая хореография</li>
                <li>Народный танец</li>
                <li>Эстрадный танец</li>
                <li>Детский танец</li>
                <li>Современная хореография</li>
            </ul>
        </div>
        <div class="program__costumedgirl clearfix">
            <img src="assets/components/app/web/img/costumedgirl.jpg">
        </div>
        <div class="container">
            <div class="program-features program-features_homepage">
                <div class="program-features__years program-features__years_homepage">
                    <span class="program-features__number">12</span> лет работы
                </div>
                <div class="program-features__international program-features__international_homepage">
                    Участие в международных конкурсах
                </div>
                <div class="program-features__reports program-features__reports_homepage">
                    <a href="#" class="program-features__concerts program-features__concerts_homepage">Отчетные концерты</a>
                    <a href="#" class="program-features__lessons program-features__lessons_homepage">Открытые уроки</a>
                </div>
            </div>
            <div class="program__collective">
                <div class="program__collective-text">
                    <p>
                        В нашем коллективе Ваш ребёнок освоит комплекс упражнений, которые сформируют правильную осанку, красивую походку, выразительную пластику, разовьют ритмичность и музыкальность, координацию движений.
                    </p>
                    <p>
                        Занятия создают ощущение радости, свободы движения, вызывают эмоциональный отклик
                        на музыку, формируют более светлое восприятие жизни.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="social-grid">
            <section class="reviews">
                <header class="reviews__heading"> 
                    <h2 class="reviews__title">О нас говорят:</h2>
                    <a href="#" class="reviews__all">Все отзывы</a>
                </header>
                <div class="home-reviews-item">
                    <div class="home-reviews-item__photo">
                        <img src="assets/components/app/web/img/review-photo.jpg" alt="">
                    </div>
                    <div class="home-reviews-item__caption">
                        <div class="home-reviews-item__name">
                            от кого отзыв
                        </div>
                        <div class="home-reviews-item__text">
                            В хореографическом ансамбле дети приобщаются к искусству танца, знакомясь с классическим балетом; источниками танцевальной культуры; самобытностью национальных танцев мира, связанных с жизненным укладом народов; современной музыкой...
                        </div>
                        <a href="#" class="link-control link-control_right">
                            <span>Показать полностью</span>
                            <svg width="28" height="14" class="link-control__arrow">
                                <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
                            </svg>
                        </a>      
                    </div>
                </div>
                <div class="home-reviews-item">
                    <div class="home-reviews-item__photo">
                        <img src="assets/components/app/web/img/review-photo-1.jpg" alt="">
                    </div>
                    <div class="home-reviews-item__caption">
                        <div class="home-reviews-item__name">
                            от кого отзыв
                        </div>
                        <div class="home-reviews-item__text">
                            В хореографическом ансамбле дети приобщаются к искусству танца, знакомясь с классическим балетом; источниками танцевальной культуры; самобытностью национальных танцев мира, связанных с жизненным укладом народов; современной музыкой...
                        </div>
                        <a href="#" class="link-control link-control_right">
                            <span>Показать полностью</span>
                            <svg width="28" height="14" class="link-control__arrow">
                                <use xlink:href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
                            </svg>
                        </a>       
                    </div>
                </div>
                <div class="home-reviews-item">
                    <div class="home-reviews-item__photo">
                        <img src="assets/components/app/web/img/review-photo-2.jpg" alt="">
                    </div>
                    <div class="home-reviews-item__caption">
                        <div class="reviews-item__name">
                            от кого отзыв
                        </div>
                        <div class="home-reviews-item__text">
                            В хореографическом ансамбле дети приобщаются к искусству танца, знакомясь с классическим балетом; источниками танцевальной культуры; самобытностью национальных танцев мира, связанных с жизненным укладом народов; современной музыкой...
                        </div>
                        <a href="#" class="link-control link-control_right">
                            <span>Показать полностью</span>
                            <svg width="28" height="14" class="link-control__arrow">
                                <use href="assets/components/app/web/img/sprite.svg#link-arrow-right"/>
                            </svg>
                        </a>       
                    </div>
                </div>
            </section>
            <div class="vk-group">
                <h3 class="vk-group__title">МЫ ВКонтакте</h3>
                <img src="assets/components/app/web/img/psevdo-vk.jpg" alt="" style="max-width: 100%;">                
            </div>
        </div>
        <section class="parents clearfix">
            <div class="parents-box parents-box_about">
                <div class="parents-box__heading">
                    А также наша команда професионалов приглашает родителей на тренировки:
                </div>
                <div class="parents-box__grid parents-box__grid_homepage">
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
                <div class="parents-box__more">
                    + индивидуальные тренировки по всем направлениям
                </div>
                <a href="#" class="btn-more js-parents-button-more">
                    <span>Записаться</span>
                    <svg class="btn-more__arrow" width="38" height="20">
                        <use xlink:href="assets/components/app/web/img/sprite.svg#button-arrow-right"/>
                    </svg>
                </a>
            </div>
        </section>
    </div>
    <div class="container container_map">
        <section class="map">
            <div class="js-toggler-usman toggler-usman-unactive">
                <span class="map__toggler-content">Мы на карте в <span class="map__toggler-larger">Новой Усмани</span></span>
            </div>
            <div class="js-toggler-otradnoe toggler-otradnoe-active">
                    <span class="map__toggler-content">Мы на карте в <span class="map__toggler-larger">Отрадном</span></span>
            </div>
            <div class="map__wrapper">
                <div class="map__otradnoe">
                    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A482a0734e1e4193343293d9b8fec72bf6f05e3e1b87eda5f88ca6046f0d5c62a&amp;width=1120&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script>
                </div>
                <div class="map__usman" hidden>
                    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afb26eab5d8de156d638ad266d9cb6685589258117234cb4b321f7a3ce4a3b571&amp;width=1120&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script>
                </div>
            </div>
        </section>
    </div>
</main> 
{/block}