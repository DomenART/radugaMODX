{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="about innerpage">
    <div class="background-title background-title_about">информация</div>
    <div class="about__intro">
        <div class="container">
            <h1 class="pagetitle pagetitle_about">о детском хореографическом  ансамбле “Радуга”</h1>
            <div class="about__introtext">
                Танец — это глоток чего-то нового.<br> Чего-то, что спрятано глубоко <br>внутри тебя. 
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
            <h2 class="section-title">Конкурсы и показательные <br>выступления (h2)</h2>
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
            <h2 class="section-title section-title_rewards">Наши достижения <br>и награды (h2)</h2>
            <div class="reward-box">
                <div class="reward-box__year">2008</div>
                <div class="reward-box__flex">
                    <div class="reward-box__title">
                        <p>Название премии или другого достижения, относящееся к текущей фотографии.</p>
                        <p>Год - получения премии</p>
                    </div>
                    <div class="reward-box__img">
                        <img src="../img/reward-img.jpg" alt="">
                    </div>
                    <div class="reward-box__desc">
                        <p>Небольшой текстовый блок о полученной премии и участии в ней,</p>
                        <p>Они создают ощущение радости, свободы движения, вызывают эмоциональный отклик на музыку, формируют более светлое восприятие жизни.</p>
                    </div>
                </div>
                <div class="reward-box__control">
                    <ul class="reward-box__control-list">
                        <li></li>
                        <li></li>
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="about__tutors">
        <div class="background-title background-title_tutors">Наша команда</div>
        <div class="container">
            <h2 class="section-title section-title_tutors">о Преподавателях (h2)</h2>
            <div class="about__tutor-box tutor-box">
                <div>
                    <div class="tutor-box__img">
                        <img src="../img/tutor.jpg" alt="">
                        <div class="box-decor"></div> 
                    </div>
                    <div class="tutor-box__name">
                        Фамилия Имя Отчество
                    </div>
                    <div class="tutor-box__vacancy">
                        хореограф
                    </div>
                    <div class="control-buttons">
                        <button class="control-btn control-btn_disabled">
                            <svg class="control-btn__arrow control-btn__arrow_left" width="18px" height="30px">
                                <use href="#control"/>
                            </svg>
                        </button>
                        <button class="control-btn">
                            <svg class="control-btn__arrow control-btn__arrow_right" width="18px" height="30px">
                                <use href="#control"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="tutor-box__title tutor-box__title_about">
                        Танец - самое возвышенное, самое трогательное и прекрасное из искусств, 
                        это не просто выражение или отвлечение
                        от жизни, это сама жизнь.
                    </div>
                    <div class="tutor-box__subtitle tutor-box__subtitle_about">
                        Хавелок Эллис
                    </div>
                    <div class="tutor-box__desc">
                        <p>
                            Текст - информация о преподавателе:<br>
                            Всероссийский Рейтинговый фестиваль - конкурс 
                        </p>
                        <p>
                            <b>"Сделано в России"</b> г. Санкт-Петербург; Международный конкурс - фестиваль детского и юношеского творчества 
                        </p>
                        <p>
                            <b>"Московское время"</b> г. Москва;<br> Международный конкурс - фестиваль детского юношеского творчества <b>"На берегах Невы"</b> г. Москва;<br>
                        </p>
                        <p> 
                            Чемпионат и Первенство ЦФО по современным танцевальным направлениям, г. Орел.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about__parents clearfix">
        <div class="background-title background-title_parents">Родителям</div>
        <div class="container">
            <div class="box-decor box-decor_about-parents"></div>
            <h2 class="section-title section-title_parents">Мы приглашаем Родителей <br>на тренировки (h2)</h2>
            <div class="parents-box parents-box_about">
                <div class="parents-box__grid parents-box__grid-about">
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="../img/fitness.png" alt="">
                        </div>
                        <div class="parent-item__title">
                            Фитнес
                        </div>
                    </div>
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="../img/ioga.png" alt=""> 
                        </div>
                        <div class="parent-item__title">
                            Стрейч - йога
                        </div>
                    </div>
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="../img/ballet.png" alt=""> 
                        </div>
                        <div class="parent-item__title">
                            Боди - балет
                        </div>
                    </div>
                    <div class="parents-item">
                        <div class="parents-item__image">
                            <img src="../img/dances.png" alt="">
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
        <div class="register about__register">
            <form method="post" class="register__form">
                <div class="register__heading">
                    <div class="register__title">
                        Записаться на урок
                    </div>
                    <div class="register__tip">
                        Поля, отмеченные *, обязательны для заполнения
                    </div>
                </div>
                <div class="register__inputs">
                    <input type="text" class="input input_register" name="name" placeholder="Имя:">
                    <input type="tel" class="input input_register" name="tel" pattern="^[0-9]+$" minlength="8" placeholder="Телефон*:" required>
                    <button type="submit" class="btn-more submit btn-more_register">
                        <span>Записаться</span>
                        <svg class="btn-more__arrow" width="25" height="19">
                            <use href="assets/components/app/web/img/sprite.svg#button-more-arrow"/>
                        </svg>
                    </button>
                </div>
                <div class="register__agreement">
                    <input type="checkbox" class="check check_register" name="agreement" id="agreement" hidden required checked>
                    <label for="agreement" class="check-lovely"></label>
                    <label for="agreement" class="register__agreement-text">
                        Прочитал(-а) <a href="#">пользовательское соглашение </a>
                        и соглашаюсь на <a href="#">обработку своих персональных данных</a>
                    </label>
                </div>
            </form>
        </div>
    </div>
</main>
{/block}