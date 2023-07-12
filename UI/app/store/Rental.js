Ext.define('RentMovieApp.store.Rental', {
    extend: 'Ext.data.Store',

    alias: 'store.rental',

    model: 'RentMovieApp.model.Rental',

    proxy: {
        type: 'rest',
        url: 'http://localhost:5004/api/Rental/all',
        appendId: true,
      
        api: {
           create: 'http://localhost:5004/api/Rental',
           read:   'http://localhost:5004/api/Rental/all',
           update: 'http://localhost:5004/api/Rental/{id}',
           destroy:'http://localhost:5004/api/Rental/{id}'
        },
        actionMethods: {    
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },

    listeners: {
        afterrender: function() {
            this.getStore().load();
        }
    }
});