<div class="enroll__title">
    Записаться<br>
    на урок
</div>
<form id="enroll" action="" method="post" class="js-form">
    <div>
        <input type="text" class="input" name="name" placeholder="Имя:">
    </div>
    <div>
        <input type="tel" class="input" name="tel" pattern="^[0-9]+$" minlength="8" placeholder="Телефон*:" required>
    </div>
    <div>
        <textarea class="textarea" name="message" placeholder="Сообщение*:" required></textarea>
    </div>
    <div class="enroll__agreement">
        <input type="checkbox" class="check" name="agreement" id="agreement" hidden required checked>
        <label for="agreement" class="check-lovely"></label>
        <label for="agreement" class="enroll__agreement-text">
            Прочитал(-а) пользовательское соглашение 
            и соглашаюсь на <a href="#">обработку своих <br>персональных данных</a>
        </label>
    </div>
    <button type="submit" class="enroll__submit btn-more submit">
        <span>Записаться</span>
        <svg class="btn-more__arrow " width="20" height="20">
            <use xlink:href="{$.assets_url}web/img/sprite.svg#button-arrow-right"/>
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
