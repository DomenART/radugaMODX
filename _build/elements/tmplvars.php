<?php

return [
    'seo.title' => array(
        'type'      => 'textfield',
        'caption'   => 'Заголовок',
        'rank' => 10,
        'category' => 'SEO'
    ),
    'seo.keywords' => array(
        'type'      => 'textfield',
        'caption'   => 'Ключевые слова',
        'rank' => 20,
        'category' => 'SEO'
    ),
    'seo.description' => array(
        'type'      => 'textarea',
        'caption'   => 'Описание',
        'rank' => 30,
        'category' => 'SEO'
    ),
    'image' => array(
        'type' => 'fastuploadtv',
        'caption' => 'Изображение',
        'category' => 'Изображение',
        'rank' => 20,
        'input_properties' => [
            'path' => 'assets/images/resources/{id}/',
            'prefix' => '',
            'MIME' => '',
            'showValue' => 'Да',
            'showPreview' => 'Да',
            'prefixFilename' => 'Нет',
        ],
    ),
    'favorite' => array(
        'type' => 'checkbox',
        'caption' => 'Избранное?',
        'category' => 'Статья',
        'elements' => 'Да==1'
    ),
    'tutors_slider' => array(
        'type' => 'migx',
        'caption' => 'Слайдер преподавателей',
        'rank' => 20,
        'category' => 'Преподаватели',
        'input_properties' => [
            'configs' => '',
            'formtabs' => '[
                {
                  "caption": "Заголовок",
                  "fields": [
                    {
                      "field": "image",
                      "caption": "Фото",
                      "inputTVtype": "image",
                      "sourceFrom": "migx"
                    },
                    {
                      "field": "name",
                      "caption": "Имя",
                      "inputTVtype": "text"
                    },
                    {
                      "field": "text",
                      "caption": "О преподавателе",
                      "inputTVtype": "textarea"
                    }
                  ]
                }
              ]',
            'columns' => '[{
                "renderer": "this.renderImage",
                "sourceFrom": "migx",
                "header": "Фото",
                "dataIndex": "image"
              },{
                "header": "Имя",
                "dataIndex": "name"
              },{
                "header": "О преподавателе",
                "dataIndex": "text"
              }]',
            'btntext' => '',
            'previewurl' => '',
            'jsonvarkey' => '',
            'autoResourceFolders' => 'false',
        ]
    ),
    'about_page.image' => array(
        'type' => 'fastuploadtv',
        'caption' => 'Изображение',
        'category' => 'Избранное'
    ),
    'about_page.title' => array(
        'type' => 'textfield',
        'caption' => 'Заголовок',
        'category' => 'Избранное'
    ),
    'about_page.subtitle' => array(
        'type' => 'textfield',
        'caption' => 'Подзаголовок',
        'category' => 'Избранное'
    ),
    'about_page.text' => array(
        'type' => 'textarea',
        'caption' => 'Текст',
        'category' => 'Избранное'
    ),
    'about_page.video' => array(
        'type' => 'textfield',
        'caption' => 'Видео',
        'category' => 'Избранное',
        'rank' => 1
    ),
    'pricelist_banner' => array(
      'type' => 'migx',
        'caption' => 'Баннеры',
        'rank' => 20,
        'category' => 'Баннеры',
        'input_properties' => [
            'configs' => '',
            'formtabs' => '[
              {
                "caption": "Заголовок",
                "fields": [
                  {
                    "field": "banner",
                    "caption": "Баннер",
                    "inputTVtype": "image",
                    "sourceFrom": "migx"
                  }
                ]
              }
            ]',
            'columns' => '[{
              "renderer": "this.renderImage",
              "sourceFrom": "migx",
              "header": "Баннер",
              "dataIndex": "banner"
            }]',
            'btntext' => '',
            'previewurl' => '',
            'jsonvarkey' => '',
            'autoResourceFolders' => 'false',
        ]
    )
];