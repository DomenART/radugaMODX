<div class="control-bar">
	<div class="control-bar__buttons">{$prev}{$next}</div>
	<div class="control-bar__links">
		{$first}
		<a href="{$_modx->resource.id | url : ['scheme' => 'full'] : ['limit' => 100]}" class="control-link control-link_right">
	        Показать все
	        <svg width="20" height="15" class="control-link__arrow control-link__arrow_right">
	            <use xlink:href="{$.assets_url}web/img/sprite.svg#arrow-right"/>
	        </svg>
	    </a>
	</div>
</div>