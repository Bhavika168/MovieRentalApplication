Ext.define('RentMovieApp.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'RentMovieApp.model.User',

    proxy: {
        type: 'rest',
        url: 'http://localhost:5004/api/User/all',
        appendId: true,
      
        api: {
           create: 'http://localhost:5004/api/User',
           read:   'http://localhost:5004/api/User/all',
           update: 'http://localhost:5004/api/User/{id}',
           destroy:'http://localhost:5004/api/User/{id}'
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