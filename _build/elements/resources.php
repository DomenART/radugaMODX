<?php

return [
    'web' => [
        'index' => [
            'pagetitle' => 'Главная',
            'hidemenu' => false,
            'properties' => [
                'template' => 'home'
            ]
        ],
        'service' => [
            'pagetitle' => 'Service',
            'hidemenu' => true,
            'published' => false,
            'resources' => [
                '404' => [
                    'pagetitle' => '404',
                    'hidemenu' => true,
                    'uri' => '404',
                    'uri_override' => true,
                    'properties' => [
                        'template' => 'baseTemplate'
                    ]
                ],
                'sitemap.xml' => [
                    'pagetitle' => 'Sitemap',
                    'template' => 0,
                    'hidemenu' => true,
                    'uri' => 'sitemap.xml',
                    'uri_override' => true,
                ],
            ],
            'properties' => [
                'template' => 'baseTemplate'
            ]
        ],
        'about' => [
            'pagetitle' => 'Об ансамбле',
            'hidemenu' => false,
            'properties' => [
                'template' => 'about'
            ]
        ],
        'timetable' => [
            'pagetitle' => 'Расписание',
            'hidemenu' => false,
            'properties' => [
                'template' => 'timetable'
            ]
        ],
        'news' => [
            'pagetitle' => 'Новости',
            'hidemenu' => false,
            'properties' => [
                'template' => 'news'
            ]
        ],
        'prices' => [
            'pagetitle' => 'Цены и акции',
            'hidemenu' => false,
            'properties' => [
                'template' => 'prices'
            ]
        ],
        'photoalbum' => [
            'pagetitle' => 'Фотоальбом',
            'hidemenu' => false,
            'properties' => [
                'template' => 'photoalbum'
            ]
        ],
        'videos' => [
            'pagetitle' => 'Видео',
            'hidemenu' => false,
            'properties' => [
                'template' => 'videos'
            ]
        ],
        'reviews' => [
            'pagetitle' => 'Отзывы',
            'hidemenu' => false,
            'properties' => [
                'template' => 'reviews'
            ]
        ],
        'contacts' => [
            'pagetitle' => 'Контакты',
            'hidemenu' => false,
            'properties' => [
                'template' => 'contacts'
            ]
        ],
    ],
];