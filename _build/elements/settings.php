<?php

return [
    'container_suffix' => [
        'key' => 'container_suffix',
        'xtype' => 'textfield',
        'value' => '',
        'area' => 'furls',
        'namespace' => 'core',
    ],
    'friendly_urls_strict' => [
        'key' => 'friendly_urls_strict',
        'xtype' => 'combo-boolean',
        'value' => true,
        'area' => 'furls',
        'namespace' => 'core',
    ],
    'use_alias_path' => [
        'key' => 'use_alias_path',
        'xtype' => 'combo-boolean',
        'value' => true,
        'area' => 'furls',
        'namespace' => 'core',
    ],
    'friendly_urls' => [
        'key' => 'friendly_urls',
        'xtype' => 'combo-boolean',
        'value' => true,
        'area' => 'furls',
        'namespace' => 'core',
    ],
    'link_tag_scheme' => [
        'key' => 'link_tag_scheme',
        'xtype' => 'textfield',
        'value' => 'abs',
        'area' => 'site',
        'namespace' => 'core',
    ],
    'pdotools_elements_path' => [
        'key' => 'pdotools_elements_path',
        'xtype' => 'textfield',
        'value' => '{core_path}components/app/elements/',
        'area' => 'pdotools_main',
        'namespace' => 'pdotools',
    ],
    'fenom_parser' => [
        'key' => 'pdotools_fenom_parser',
        'xtype' => 'combo-boolean',
        'value' => true,
        'area' => 'pdotools_main',
        'namespace' => 'pdotools',
    ],
    'site_email' => [
        'key' => 'site_email',
        'xtype' => 'textfield',
        'value' => 'radugaotr@mail.ru',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'site_tel' => [
        'key' => 'site_tel',
        'xtype' => 'textfield',
        'value' => '<span>+7 (920)</span>217-99-64',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'site_vk' => [
        'key' => 'site_vk',
        'xtype' => 'textfield',
        'value' => 'google.com',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'site_instagram' => [
        'key' => 'site_instagram',
        'xtype' => 'textfield',
        'value' => 'google.com',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'site_youtube' => [
        'key' => 'site_youtube',
        'xtype' => 'textfield',
        'value' => 'google.com',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'address_first' => [
        'key' => 'address_first',
        'xtype' => 'textfield',
        'value' => '<b>с. Новая Усмань,</b><br>
                    ул. Ленина, 228 В <span>(2 этаж)</span>',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'address_second' => [
        'key' => 'address_second',
        'xtype' => 'textfield',
        'value' => '<b>п. Отрадное,</b><br>
                    ул. 50 лет Октября, д. 83
                    <span>(здание ДК)</span><br>
                    ул. Советская, д. 32 б
                    <span>(здание Администрации)</span>',
        'area' => 'default',
        'namespace' => 'app',
    ]
];
