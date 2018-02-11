<div class="container">
    <aside class="innerpage-aside">
        <div class="innerpage-aside__first">
            <div class="innerpage-aside__decor"></div>
            <div class="enroll">
                {'!AjaxForm@Form' | snippet : [
                    'emailSubject'  => 'Запись на урок',
                    'validate'      => 'nomail:blank,tel:required',
                    'form'          => '@FILE chunks/forms/enroll.tpl'
                ]}
            </div>
        </div>
        <div class="innerpage-aside__second">
            <div class="address">
                <header class="address__header">
                    <div class="address__title">
                        Детский хореографический ансамбль “Радуга”
                    </div>
                    <div class="address__age">
                        от 4 лет
                    </div>
                </header>
                <div>
                    <div class="address-text address-text_aside">
                        <svg class="map-pin-icon" width="16" height="24">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#map-pin"/>
                        </svg>
                        {'contacts.address_first' | config}
                    </div>
                    <div class="address-text address-text_aside">
                        <svg class="map-pin-icon" width="16" height="24">
                            <use xlink:href="assets/components/app/web/img/sprite.svg#map-pin"/>
                        </svg>
                        {'contacts.address_second' | config}
                    </div>
                </div>
            </div>
        </div>
        <div class="innerpage-aside__third">
            <div class="vk-members"></div>
        </div>
        <div class="innerpage-aside__fourth">
            <div class="vk-group">
                <h3 class="vk-group__title">МЫ ВКонтакте</h3>
                <img src="assets/components/app/web/img/psevdo-vk.jpg" alt="" style="max-width: 100%;">
            </div>
        </div>
    </aside>
</div>
