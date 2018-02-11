<?php

return [
    'web' => [
        'index' => [
            'pagetitle' => 'Главная',
            'hidemenu' => false,
            '_template' => 'home'
        ],
        'service' => [
            'pagetitle' => 'Service',
            'hidemenu' => true,
            'published' => false,
            '_template' => 'baseTemplate',
            'resources' => [
                '404' => [
                    'pagetitle' => '404',
                    'hidemenu' => true,
                    'uri' => '404',
                    'uri_override' => true,
                    '_template' => '404'
                ],
                'sitemap' => [
                    'pagetitle' => 'Карта сайта',
                    '_template' => 'sitemap',
                    'hidemenu' => true
                ],
            ],
        ],
        'about' => [
            'pagetitle' => 'Об ансамбле',
            'hidemenu' => false,
            '_template' => 'about'
        ],
        'timetable' => [
            'pagetitle' => 'Расписание',
            'hidemenu' => false,
            '_template' => 'timetable'
        ],
        'news' => [
            'pagetitle' => 'Новости',
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            '_template' => 'news',
            'properties' => [
                'tickets' => [
                    '_template' => 'article',
                    'uri' => '%alias%ext',
                    'disable_jevix' => true,
                    'process_tags' => true,
                    'richtext' => true
                ]
            ],
            'resources' => [
                'article-1' => [
                    'pagetitle' => 'Типовая текстовая страница №1',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    '_template' => 'article'
                ],
                'article-2' => [
                    'pagetitle' => 'Типовая текстовая страница №2',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    '_template' => 'article'
                ],
                'article-3' => [
                    'pagetitle' => 'Типовая текстовая страница №3',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    '_template' => 'article'
                ],
                'article-4' => [
                    'pagetitle' => 'Типовая текстовая страница №4',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    '_template' => 'article'
                ],
            ],
        ],
        'prices' => [
            'pagetitle' => 'Цены и акции',
            'hidemenu' => false,
            '_template' => 'prices',
            'resources' => [
                'otradnoe' => [
                    'pagetitle' => 'Отрадное',
                    'hidemenu' => true
                ],
                'usman' => [
                    'pagetitle' => 'Новая Усмань',
                    'hidemenu' => true
               ]
            ]
        ],
        'photoalbum' => [
            'pagetitle' => 'Фотоальбом',
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            '_template' => 'photoalbum',
            'properties' => [
                'tickets' => [
                    'template' => 'category',
                    'disable_jevix' => true,
                    'process_tags' => true,
                    'uri' => '%alias%ext'
                ]
            ],
            'resources' => [
                'category-1' => [
                    'pagetitle' => 'Категория №1',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ],
                'category-2' => [
                    'pagetitle' => 'Категория №2',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ],
                'category-3' => [
                    'pagetitle' => 'Категория №3',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ],
                'category-4' => [
                    'pagetitle' => 'Категория №4',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ],
                'category-5' => [
                    'pagetitle' => 'Категория №5',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ],
                'category-6 '=> [
                    'pagetitle' => 'Категория №6',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ],
                'category-7' => [
                    'pagetitle' => 'Категория №7',
                    'class_key' => 'Ticket',
                    '_template' => 'category'
                ]
            ]
        ],
        'videos' => [
            'pagetitle' => 'Видео',
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            '_template' => 'videos',
            'properties' => [
                'tickets' => [
                    'template' => 0,
                    'disable_jevix' => true,
                    'process_tags' => true,
                    'uri' => '%alias%ext'
                ]
            ],
            'resources' => [
                'video-1' => [
                    'pagetitle' => 'Видео №1',
                    'class_key' => 'Ticket'
                ],
                'video-2' => [
                    'pagetitle' => 'Видео №2',
                    'class_key' => 'Ticket'
                ],
                'video-3' => [
                    'pagetitle' => 'Видео №3',
                    'class_key' => 'Ticket'
                ],
                'video-4' => [
                    'pagetitle' => 'Видео №4',
                    'class_key' => 'Ticket'
                ]
            ]
        ],
        'reviews' => [
            'pagetitle' => 'Отзывы',
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            '_template' => 'reviews',
            'properties' => [
                'tickets' => [
                    'disable_jevix' => true,
                    'process_tags' => true,
                    'uri' => '%alias%ext',
                    'richtext' => true
                ]
            ],
            'resources' => [
                'review-1' => [
                    'pagetitle' => 'Фамилия Имя Отчество №1',
                    'class_key' => 'Ticket',
                    '_template' => 'review'
                ],
                'review-2' => [
                    'pagetitle' => 'Фамилия Имя Отчество №2',
                    'class_key' => 'Ticket',
                    '_template' => 'review'
                ],
                'review-3' => [
                    'pagetitle' => 'Фамилия Имя Отчество №3',
                    'class_key' => 'Ticket',
                    '_template' => 'review'
                ],
                'review-4' => [
                    'pagetitle' => 'Фамилия Имя Отчество №4',
                    'class_key' => 'Ticket',
                    '_template' => 'review'
                ]
            ]
        ],
        'contacts' => [
            'pagetitle' => 'Контакты',
            'hidemenu' => false,
            '_template' => 'contacts'
        ],
        'tutors' => [
            'pagetitle' => 'Преподаватели',
            'hidemenu' => false,
            '_template' => 'tutors'
        ],
        'routes' => [
            'pagetitle' => 'Направления',
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            '_template' => 'routes',
            'properties' => [
                'tickets' => [
                    'template' => 'baseTemplate',
                    'disable_jevix' => true,
                    'process_tags' => true,
                    'uri' => '%alias%ext'
                ]
            ],
            'resources' => [
                'route-1' => [
                    'pagetitle' => 'Название направления №1',
                    'class_key' => 'Ticket'
                ],
                'route-2' => [
                    'pagetitle' => 'Название направления №2',
                    'class_key' => 'Ticket'
                ],
                'route-3' => [
                    'pagetitle' => 'Название направления №3',
                    'class_key' => 'Ticket'
                ],
                'route-4' => [
                    'pagetitle' => 'Название направления №4',
                    'class_key' => 'Ticket'
                ]
            ]
        ]
    ]
];