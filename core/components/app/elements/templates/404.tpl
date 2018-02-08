{extends 'file:templates/base.tpl'}
{block 'header'}{/block}
{block 'menubar'}{/block}  
{block 'content'}
<main class="error">
	<div class="error__content">
		<div class="background-title background-title_error">ошибка</div>
		<div class="error__box">
			<div class="error__number">404</div>
			<div class="error__title">Страница не найдена</div>
			<div class="error__desc">
				Возможно, она была перемещена или удалена. <br><a href="">Вернитесь назад</a> или начните с <a href="{'site_url' | config}">главной</a>
			</div>
		</div>
		<div class="error__control">
			<a href="#" class="btn-more">
				<svg class="button-arrow-left btn-more__arrow " width="24" height="20">
	                <use xlink:href="{$.assets_url}web/img/sprite.svg#button-arrow-left"/>
	            </svg>
				Возвращаюсь
			</a>
			<a href="{'site_url' | config}" class="error__btn-home btn-home">
				<svg class="btn-home__icon" width="24" height="20">
	                <use xlink:href="{$.assets_url}web/img/sprite.svg#house"/>
	            </svg>
				На главную
			</a>	
		</div>
	</div>
	<div class="error__logo">
	    <svg class="menu-bar-logo" width="77" height="36">
            <use xlink:href="{$.assets_url}web/img/sprite.svg#logo" />
        </svg>
	</div>
	<div class="error__copyright">
		© 2017 г. "Радуга" - детский хореографический ансамбль. Копировование материалов без указания источника запрещено.
	</div>
</main>
{/block}
{block 'footer'}{/block}