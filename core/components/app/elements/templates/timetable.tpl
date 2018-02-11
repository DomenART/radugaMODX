{extends 'file:templates/base.tpl'}
{block 'content'}
<main class="timetable innerpage">
    <div class="background-title" uk-scrollspy="cls: uk-animation-slide-right; offset-top: -200">
        наша жизнь
    </div>
    <div class="container">
        <h1 class="pagetitle pagetitle_timetable">расписание</h1>
    </div>
    <div class="timetable__wrapper">
        <div class="timetable__control">
            <div class="timetable__time-bar tab-bar">
                <div class="tab-bar__item tab-bar__item_disabled">
                    <span>Новая Усмань</span>
                </div>
                <div class="tab-bar__item tab-bar__item_active">
                    <span>Отрадное</span>
                </div>
            </div>
            <div class="timetable__grade">
                <div class="timetable__grade-item">
                    <b>I год</b>
                    обучения
                </div>
                <div class="timetable__grade-item">
                    <b>II год</b>
                    обучения
                </div>
                <div class="timetable__grade-item">
                    <b>III год</b>
                    обучения
                </div>
                <div class="timetable__grade-item">
                    <b>4 год</b>
                    обучения
                </div>
                <div class="timetable__grade-item">
                    <b>Средняя группа</b>
                </div>
                <div class="timetable__grade-item">
                    <b>Старшая группа</b>
                </div>
            </div>
            <div class="timetable__directions timetable__grade-item">
                    по направлениям
            </div>
        </div>
        <div class="timetable__table-box">
            <table class="timetable__table">
                <tr>
                    <th></th>
                    <th>Понедельник</th>
                    <th>Вторник</th>
                    <th>Среда</th>
                    <th>Четверг</th>
                    <th>Пятница</th>
                    <th>Суббота</th>
                </tr>
                <tr>
                    <td>
                        11:00
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        12:00
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        13:00
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        14:00
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        15:00
                    </td> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        16:00
                    </td> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        17:00
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                <tr>
                    <td>
                        18:00
                    </td>  
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div class="lesson">
                            <div>17:45-18:55</div>
                            <div>2 год обучения</div>
                            <div><span>в администрации</span></div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        19:00
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        20:00
                    </td> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        21:00
                    </td> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table class="timetable__table" hidden>
                    <tr>
                        <th></th>
                        <th>Понедельник</th>
                        <th>Вторник</th>
                        <th>Среда</th>
                        <th>Четверг</th>
                        <th>Пятница</th>
                        <th>Суббота</th>
                    </tr>
                    <tr>
                        <td>
                            11:00
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            12:00
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            13:00
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            14:00
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            15:00
                        </td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            16:00
                        </td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            17:00
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> 
                    <tr>
                        <td>
                            18:00
                        </td>  
                        <td>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            19:00
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            20:00
                        </td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            21:00
                        </td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
        </div>
    </div>
</main>
{/block}