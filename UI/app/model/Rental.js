Ext.define('RentMovieApp.model.Rental', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'rentalId', type: 'int' },
        { name: 'userId', type: 'int' },
        { name: 'movieId', type: 'int' },
        { name: 'rentalDate', type: 'auto' },
        { name: 'dueDate', type: 'auto' },
        { name: 'isReturned', type: 'string' },
    ]
});