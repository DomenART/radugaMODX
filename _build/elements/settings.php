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
        'area' => 'social',
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
    'social.instagram' => [
        'key' => 'social.instagram',
        'xtype' => 'textfield',
        'value' => 'google.com',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'social.youtube' => [
        'key' => 'social.youtube',
        'xtype' => 'textfield',
        'value' => 'google.com',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'contacts.address_first' => [
        'key' => 'contacts.address_first',
        'xtype' => 'textfield',
        'value' => '<b>с. Новая Усмань,</b><br>
                    ул. Ленина, 228 В <span>(2 этаж)</span>',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'contacts.address_second' => [
        'key' => 'contacts.address_second',
        'xtype' => 'textfield',
        'value' => '<b>п. Отрадное,</b><br>
                    ул. 50 лет Октября, д. 83
                    <span>(здание ДК)</span><br>
                    ул. Советская, д. 32 б
                    <span>(здание Администрации)</span>',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'contacts.email' => [
        'key' => 'contacts.email',
        'xtype' => 'textfield',
        'value' => 'radugaotr@mail.ru',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'contacts.tel' => [
        'key' => 'contacts.tel',
        'xtype' => 'textfield',
        'value' => '<span>+7 (920)</span>&nbsp;217-99-64',
        'area' => 'default',
        'namespace' => 'app',
    ],
    'contacts.vk' => [
        'key' => 'contacts.vk',
        'xtype' => 'textfield',
        'value' => 'google.com',
        'area' => 'default',
        'namespace' => 'app',
    ],
];
