<div class="container">
    <aside class="innerpage-aside">
        <div class="innerpage-aside__first">
            <div class="innerpage-aside__decor"></div>
            {'!AjaxForm@Form' | snippet : [
                'emailSubject'  => 'Запись на урок',
                'validate'      => 'nomail:blank,tel:required',
                'form'          => '@FILE chunks/forms/enroll.tpl'
            ]}
        </div>
        <div class="innerpage-aside__second">
            <img src="{$.assets_url}web/img/contacts-aside-image.jpg" alt="">
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
