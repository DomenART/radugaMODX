<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="cmsmagazine" content="ef9002bde22164e1bb8ca1b1793cf47b">
<title>{$_modx->resource['seo.title'] ?: $_modx->resource.longtitle ?: $_modx->resource.pagetitle}</title>
{var $assets = ('assets_url' | config) ~ 'components/app/'}
{('<meta name="csrf-token" content="' ~ $.session['csrf-token'] ~ '">') | htmlToHead}
{('<meta name="assets-version" content="' ~ $.assets_version ~ '">') | htmlToHead}
{($assets ~ 'web/main.css?v=' ~ $.assets_version) | cssToHead}
{($assets ~ 'web/main.js?v=' ~ $.assets_version) | jsToBottom : false}
<base href="{'site_url' | config}">