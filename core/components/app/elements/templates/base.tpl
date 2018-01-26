<!doctype html>
<html lang="en">
    <head>
        {include 'file:chunks/partials/head.tpl'}
    </head>
    <body>
        {include 'file:chunks/partials/menu.tpl'}
        {block 'header'}
            {include 'file:chunks/partials/header.tpl'}
        {/block}
        {block 'menubar'}
            {include 'file:chunks/partials/menubar.tpl'}
        {/block}    
        {block 'content'}
            {$_modx->resource.content}
        {/block}
        {include 'file:chunks/partials/footer.tpl'}
        <div class="to-top" hidden>
            <svg class="to-top__arrow" width="18px" height="30px">
                <use xlink:href="assets/components/app/web/img/sprite.svg#to-top"/>
            </svg>
        </div>
    </body>
</html>