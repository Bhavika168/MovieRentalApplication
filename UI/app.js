/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'RentMovieApp.Application',

    name: 'RentMovieApp',

    stores: ['RentMovieApp.store.Movie'],

    requires: [
        // This will automatically load all classes in the RentMovieApp namespace
        // so that application classes do not need to require each other.
        'RentMovieApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'RentMovieApp.view.main.Main',

    // launch: function () {
    //     // Instantiate the store
    //     var movieStore = Ext.create('RentMovieApp.store.Movie');
    // }
});
