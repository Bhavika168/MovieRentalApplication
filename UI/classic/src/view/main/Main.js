/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RentMovieApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'RentMovieApp.view.main.MainController',
        'RentMovieApp.view.main.MainModel',

        'RentMovieApp.store.Movie',
        'RentMovieApp.store.User',
        'RentMovieApp.store.Rental',

        'RentMovieApp.model.Movie',
        'RentMovieApp.model.User',
        'RentMovieApp.model.Rental',

        'RentMovieApp.view.main.List',
        'RentMovieApp.view.AddMovie',
        'RentMovieApp.view.DeleteMovie',
        'RentMovieApp.view.UpdateMovie',

        'RentMovieApp.view.main.List1',
        'RentMovieApp.view.AddUser',
        'RentMovieApp.view.DeleteMovie',
        'RentMovieApp.view.UpdateUser',

        'RentMovieApp.view.main.List2',
        'RentMovieApp.view.AddRental',
        'RentMovieApp.view.DeleteMovie',
        'RentMovieApp.view.UpdateRental',

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Movie',
        iconCls: 'fa-video',
       
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'list1'
        }]
    }, {
        title: 'Rental',
        iconCls: 'fa-film',
        items: [{
            xtype: 'list2'
        }]
    }
    //  {
    //     title: 'Settings',
    //     iconCls: 'fa-cog',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }
]
});
