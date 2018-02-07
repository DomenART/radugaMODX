<header class="header header_homepage">
	<ul class="header-social">
	<li>
	    <a href="{'social.vk' | url}" aria-label="Страница Вконтакте">
		<svg class="svg-vkontakte" width="26" height="26">
		    <use xlink:href="{$.assets_url}web/img/sprite.svg#vkontakte" />
		</svg>
	    </a>
	</li>
	<li>
	    <a href="{'social.instagram' | url}" aria-label="Профиль в инстаграме">
		<svg class="svg-instagram" width="19" height="19">
		    <use xlink:href="{$.assets_url}web/img/sprite.svg#instagram" />
		</svg>
	    </a>
	</li>
	<li>
	    <a href="{'social.youtube' | url}" aria-label="Канал на ютубе">
		<svg class="svg-youtube" width="20" height="20">
		    <use xlink:href="{$.assets_url}web/img/sprite.svg#youtube" />
		</svg>
	    </a>
	</li>
	</ul>
	<a href="mailto:{'contacts.email' | config}" class="header__email" title="Электронная почта">{'contacts.email' | config}</a>
	<a href="tel:{'contacts.tel' | config}" class="header__phone" title="Телефон">{'contacts.tel' | config}</a>
</header>
