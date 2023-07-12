Ext.define('RentMovieApp.store.Movie', {
    extend: 'Ext.data.Store',
    alias: 'store.movie',
    model: 'RentMovieApp.model.Movie',
    proxy: {
      type: 'rest',
      url: 'http://localhost:5004/api/Movie',
      appendId: false,
      api: {
        create: 'http://localhost:5004/api/Movie',
        read: 'http://localhost:5004/api/Movie/all',
        update: 'http://localhost:5004/api/Movie/{id}',
        destroy: 'http://localhost:5004/api/Movie/{id}' 
      },
      actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'PUT',
        destroy: 'DELETE'
      },
      reader: {
        type: 'json',
        idProperty: 'movieId',
        rootProperty: 'data'
      },
      writer: {
        type: 'json',
        writeAllFields: true
      }
    },
    buildUrl: function (request) {
      var me = this,
        url = me.callParent(arguments);

      if (request.getAction() === 'destroy') {
        url = url.replace(/\/%7Bid%7D$/, '/' + request.getId());
      }

      return url;
    },
  
    listeners: {
      afterrender: function() {
          this.getStore().load();
      }
    }
  });
  