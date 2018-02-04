<?php

return [
    'seo.title' => array(
        'type'      => 'textfield',
        'caption'   => 'Заголовок',
        'rank' => 10,
        '_category' => 'SEO'
    ),
    'seo.keywords' => array(
        'type'      => 'textfield',
        'caption'   => 'Ключевые слова',
        'rank' => 20,
        '_category' => 'SEO'
    ),
    'seo.description' => array(
        'type'      => 'textarea',
        'caption'   => 'Описание',
        'rank' => 30,
        '_category' => 'SEO'
    ),
    'image' => array(
        'type' => 'fastuploadtv',
        'caption' => 'Изображение',
        '_category' => 'Изображение',
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
        '_category' => 'Статья',
        'elements' => 'Да==1'
    ),
    'tutors.slider' => array(
        'type' => 'migx',
        'caption' => 'Слайдер преподавателей',
        'rank' => 20,
        '_category' => 'Преподаватели',
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
        '_category' => 'Избранное'
    ),
    'about_page.title' => array(
        'type' => 'textfield',
        'caption' => 'Заголовок',
        '_category' => 'Избранное'
    ),
    'about_page.subtitle' => array(
        'type' => 'textfield',
        'caption' => 'Подзаголовок',
        '_category' => 'Избранное'
    ),
    'about_page.text' => array(
        'type' => 'textarea',
        'caption' => 'Текст',
        '_category' => 'Избранное'
    ),
    'about_page.video' => array(
        'type' => 'textfield',
        'caption' => 'Видео',
        '_category' => 'Избранное',
        'rank' => 1
    ),
    'pricelist_banner' => array(
      'type' => 'migx',
        'caption' => 'Баннеры',
        'rank' => 20,
        '_category' => 'Баннеры',
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
    ),
    'about_live.heading' => array(
        'type' => 'textfield',
        'caption' => 'Заголовок "Наша жизнь"',
        '_category' => 'Наша жизнь',
        'rank' => 1
    ),
    'about_live.text' => array(
        'type' => 'textarea',
        'caption' => 'Текст о нашей жизни',
        '_category' => 'Наша жизнь',
        'rank' => 2
    ),
    'about_rewards.heading' => array(
        'type' => 'textfield',
        'caption' => 'Заголовок "Мы гордимся"',
        '_category' => 'Мы гордимся',
        'rank' => 3
    ),
    'about_rewards.slider' => array(
        'type' => 'migx',
          'caption' => 'Слайдер "О наградах"',
          'rank' => 4,
          '_category' => 'Мы гордимся',
          'input_properties' => [
              'configs' => '',
              'formtabs' => '[
                {
                  "caption": "Заголовок",
                  "fields": [
                    {
                      "field": "year",
                      "caption": "Год",
                      "inputTVtype": "text"
                    },
                    {
                      "field": "title",
                      "caption": "Название ",
                      "inputTVtype": "text"
                    },
                    {
                      "field": "image",
                      "caption": "Фото",
                      "inputTVtype": "image",
                      "sourceFrom": "migx"
                    },
                    {
                      "field": "text",
                      "caption": "Текст",
                      "inputTVtype": "textarea"
                    }
                  ]
                }
            ]',
            'columns' => '[
                {
                    "header": "Год",
                    "dataIndex": "year"
                },
                {
                    "header": "Название ",
                    "dataIndex": "title"
                },
                {
                    "renderer": "this.renderImage",
                    "sourceFrom": "migx",
                    "header": "Фото",
                    "dataIndex": "image"
                },
                {
                    "header": "Текст",
                    "dataIndex": "text"
                }
            ]'
        ]
    ),
    'about_tutors.heading' => array(
        'type' => 'textfield',
        'caption' => 'Заголовок "О преподавателях"',
        '_category' => 'О преподавателях',
        'rank' => 1
    ),
    'about_tutors.slider' => array(
        'type' => 'migx',
        'caption' => 'Слайдер преподавателей',
        'rank' => 2,
        '_category' => 'О преподавателях',
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
                      "field": "position",
                      "caption": "Должность",
                      "inputTVtype": "text"
                    },
                    {
                      "field": "title",
                      "caption": "Заголовок текста",
                      "inputTVtype": "textarea"
                    },
                    {
                      "field": "subtitle",
                      "caption": "Подзаголовок",
                      "inputTVtype": "text"
                    },
                    {
                      "field": "text",
                      "caption": "Текст",
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
                "header": "Должность",
                "dataIndex": "position"
              },{
                "header": "Заголовок текста",
                "dataIndex": "title"
              },{
                "header": "Подзаголовок",
                "dataIndex": "subtitle"
              },{
                "header": "Текст",
                "dataIndex": "text"
            }]',
            'btntext' => '',
            'previewurl' => '',
            'jsonvarkey' => '',
            'autoResourceFolders' => 'false',
        ]
    ),
    'about_parents.heading' => array(
        'type' => 'textfield',
        'caption' => 'Заголовок "Родителям"',
        '_category' => 'Родителям',
        'rank' => 1
    ),
];