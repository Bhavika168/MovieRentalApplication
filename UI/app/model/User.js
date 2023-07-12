Ext.define('RentMovieApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        
    { name: 'userId', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'password', type: 'string' },
    { name: 'contact', type: 'int' },
    { name: 'email', type: 'string' },
    { name: 'status', type: 'string' },
]
});