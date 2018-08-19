'use strict';

$(document).ready(function() {
/*-----------------------------------------------------
    Main Calendar
------------------------------------------------------*/
    if($('#calendar')[0]) {
        var date = new Date ();
        var m = date.getMonth ();
        var y = date.getFullYear ();
        var target = $ ('#calendar');

        target.fullCalendar ({
            header: {
                right: '',
                center: '',
                left: ''
            },
            buttonIcons: {
                prev: 'calendar__prev',
                next: 'calendar__next'
            },
            theme: false,
            selectable: true,
            selectHelper: true,
            editable: true,
            events: [
                {
                    id: 1,
                    title: 'Fusce dapibus tellus',
                    start: new Date (y, m, 1),
                    allDay: true,
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },
                {
                    id: 2,
                    title: 'Fusce dapibus tellus',
                    start: new Date (y, m, 10),
                    allDay: true,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    id: 3,
                    title: 'Egestas Justo',
                    start: new Date (y, m, 18),
                    allDay: true,
                    description: ''
                },
                {
                    id: 4,
                    title: 'Bibendum Vehicula Quam',
                    start: new Date (y, m, 20),
                    allDay: true,
                    description: ''
                },
                {
                    id: 5,
                    title: 'Venenatis Dolor Porta',
                    start: new Date (y, m, 5),
                    allDay: true,
                    description: 'Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
                },
                {
                    id: 6,
                    title: 'Sem Pharetra',
                    start: new Date (y, m, 21),
                    allDay: true,
                    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },
                {
                    id: 7,
                    title: 'Ullamcorper Porta',
                    start: new Date (y, m, 5),
                    allDay: true,
                    description: 'Malesuada Ullamcorper Nullam'
                },
                {
                    id: 8,
                    title: 'Egestas',
                    start: new Date (y, m, 5),
                    allDay: true,
                    description: ''
                },
                {
                    id: 9,
                    title: 'Purus',
                    start: new Date (y, m, 1),
                    allDay: true,
                    description: 'Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
                },
                {
                    id: 10,
                    title: 'Risus Elit',
                    start: new Date (y, m, 15),
                    allDay: true,
                    description: 'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
                },
                {
                    id: 11,
                    title: 'Risus Fermentum Justo',
                    start: new Date (y, m, 25),
                    allDay: true,
                    description: 'Vehicula Cras'
                },
                {
                    id: 12,
                    title: 'Porta Ornare Euismod',
                    start: new Date (y, m, 30),
                    allDay: true,
                    description: ''
                },
                {
                    id: 13,
                    title: 'Amet Adipiscing',
                    start: new Date (y, m, 30),
                    allDay: true,
                    description: ''
                },
            ],

            dayClick: function (date) {
                $ ('#new-event').modal ('show');
                $ ('#addNew-event input:text').val ('');
                var isoDate = moment (date).toISOString ();
                $ ('.new-event__start').val (isoDate);
                $ ('.new-event__end').val (isoDate);
            },

            viewRender: function (view) {
                var calendarDate = $ ("#calendar").fullCalendar ('getDate');
                var calendarMonth = calendarDate.month ();

                //Set data attribute for header. This is used to switch header images using css
                $ ('#calendar .fc-toolbar').attr ('data-calendar-month', calendarMonth);

                //Set title in page header
                $ ('.content__header--calendar > h2').html (view.title);
            },

            eventClick: function (event, element) {

                $ ('.edit-event__id').val (event.id);
                $ ('.edit-event__title').val (event.title);
                $ ('.edit-event__description').val (event.description);
                $ ('#edit-event').modal ('show');
            }
        });


        //Add new Event
        $ ('body').on ('click', '#addEvent', function () {
            var eventTitle = $ ('.new-event__title').val ();

            var GenRandom = {
                Stored: [],
                Job: function () {
                    var newId = Date.now ().toString ().substr (6); // or use any method that you want to achieve this string

                    if (!this.Check (newId)) {
                        this.Stored.push (newId);
                        return newId;
                    }
                    return this.Job ();
                },
                Check: function (id) {
                    for (var i = 0; i < this.Stored.length; i++) {
                        if (this.Stored[i] == id) return true;
                    }
                    return false;
                }
            };

            if (eventTitle != '') {
                $ ('#calendar').fullCalendar ('renderEvent', {
                    id: GenRandom.Job (),
                    title: eventTitle,
                    start: $ ('.new-event__start').val (),
                    end: $ ('.new-event__end').val (),
                    allDay: true,
                    className: $ ('.color-tag input:checked').val ()

                }, true);

                $ ('.new-event__form')[0].reset ()
                $ ('#new-event').modal ('hide');
            }
            else {
                $ ('.new-event__title').closest ('.form-group').addClass ('has-error');
                $ ('.new-event__title').focus ();
            }
        });


        //Update/Delete an Event
        $ ('body').on ('click', '[data-calendar]', function () {
            var calendarAction = $ (this).data('calendar');
            var currentId = $ ('.edit-event__id').val ();
            var currentTitle = $ ('.edit-event__title').val ();
            var currentDesc = $ ('.edit-event__description').val ();
            var currentEvent = $ ("#calendar").fullCalendar ('clientEvents', currentId);

            //Update
            if (calendarAction === 'update') {
                if (currentTitle != '') {
                    currentEvent[0].title = currentTitle;
                    currentEvent[0].description = currentDesc;

                    $ ('#calendar').fullCalendar ('updateEvent', currentEvent[0]);
                    $ ('#edit-event').modal ('hide');
                }
                else {
                    $ ('.edit-event__title').closest ('.form-group').addClass ('has-error');
                    $ ('.edit-event__title').focus ();
                }
            }

            //Delete
            if (calendarAction === 'delete') {
                $ ('#edit-event').modal ('hide');
                setTimeout (function () {
                    swal ({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then (function () {
                        target.fullCalendar ('removeEvents', currentId);
                        swal (
                            'Deleted!',
                            'Your list has been deleted.',
                            'success'
                        );
                    })
                }, 200);
            }
        });


        //Calendar views switch
        $ ('body').on ('click', '[data-calendar-view]', function (e) {
            e.preventDefault ();

            $ ('[data-calendar-view]').removeClass ('active');
            $ (this).addClass ('active');
            var calendarView = $ (this).attr ('data-calendar-view');
            target.fullCalendar ('changeView', calendarView);
        });


        //Calendar Next
        $ ('body').on ('click', '.actions__calender-next', function (e) {
            e.preventDefault ();
            target.fullCalendar ('next');
        });


        //Calendar Prev
        $ ('body').on ('click', '.actions__calender-prev', function (e) {
            e.preventDefault ();
            target.fullCalendar ('prev');
        });
    }



    /*-----------------------------------------------------
        Calendar Widget
    ------------------------------------------------------*/
    if($('#widget-calendar__main')[0]) {
        $('#widget-calendar__main').fullCalendar({
            contentHeight: 'auto',
            theme: false,
            header: {
                right: 'next',
                center: 'title, ',
                left: 'prev'
            },
            buttonIcons: {
                prev: 'left',
                next: 'right',
            },
            defaultDate: '2016-08-12',
            editable: true,
            events: [
                {
                    title: 'Dolor Pellentesque',
                    start: '2016-08-01',
                    className: 'fc-event--cyan'
                },
                {
                    title: 'Purus Nibh',
                    start: '2016-08-07',
                    className: 'fc-event--amber'
                },
                {
                    title: 'Amet Condimentum',
                    start: '2016-08-09',
                    className: 'fc-event--green'
                },
                {
                    title: 'Tellus',
                    start: '2016-08-12',
                    className: 'fc-event--blue'
                },
                {
                    title: 'Vestibulum',
                    start: '2016-08-18',
                    className: 'fc-event--cyan'
                },
                {
                    title: 'Ipsum',
                    start: '2016-08-24',
                    className: 'fc-event--teal'
                },
                {
                    title: 'Fringilla Sit',
                    start: '2016-08-27',
                    className: 'fc-event--blue'
                },
                {
                    title: 'Amet Pharetra',
                    url: 'http://google.com/',
                    start: '2016-08-30',
                    className: 'mdc-bg-amber-500'
                }
            ]
        });

        //Display Current Date as Calendar widget header
        var mYear = moment().format('YYYY');
        var mDay = moment().format('dddd, MMM D');
        $('.widget-calendar__year').html(mYear);
        $('.widget-calendar__day').html(mDay);
    }
});