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
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            'properties' => [
                'template' => 'news',
                'tickets' => [
                    'template' => 'article',
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
                    'properties' => [
                        'template' => 'article'
                    ]
                ],
                'article-2' => [
                    'pagetitle' => 'Типовая текстовая страница №2',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    'properties' => [
                        'template' => 'article'
                    ]
                ],
                'article-3' => [
                    'pagetitle' => 'Типовая текстовая страница №3',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    'properties' => [
                        'template' => 'article'
                    ]
                ],
                'article-4' => [
                    'pagetitle' => 'Типовая текстовая страница №4',
                    'class_key' => 'Ticket',
                    'hidemenu' => true,
                    'properties' => [
                        'template' => 'article'
                    ]
                ],
            ],
        ],
        'prices' => [
            'pagetitle' => 'Цены и акции',
            'hidemenu' => false,
            'properties' => [
                'template' => 'prices'
            ],
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
            'properties' => [
                'template' => 'photoalbum',
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
                    'class_key' => 'Ticket'
                ],
                'category-2' => [
                    'pagetitle' => 'Категория №2',
                    'class_key' => 'Ticket'
                ],
                'category-3' => [
                    'pagetitle' => 'Категория №3',
                    'class_key' => 'Ticket'
                ],
                'category-4' => [
                    'pagetitle' => 'Категория №4',
                    'class_key' => 'Ticket'
                ],
                'category-5' => [
                    'pagetitle' => 'Категория №5',
                    'class_key' => 'Ticket'
                ],
                'category-6 '=> [
                    'pagetitle' => 'Категория №6',
                    'class_key' => 'Ticket'
                ],
                'category-7' => [
                    'pagetitle' => 'Категория №7',
                    'class_key' => 'Ticket'
                ]
            ]
        ],
        'videos' => [
            'pagetitle' => 'Видео',
            'class_key' => 'TicketsSection',
            'hide_children_in_tree' => 1,
            'hidemenu' => false,
            'properties' => [
                'template' => 'videos',
                'tickets' => [
                    'template' => 'baseTemplate',
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
            'hidemenu' => false,
            'class_key' => 'modDocument',
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
        'tutors' => [
            'pagetitle' => 'Преподаватели',
            'hidemenu' => false,
            'properties' => [
                'template' => 'tutors'
            ]
        ]
    ],
];