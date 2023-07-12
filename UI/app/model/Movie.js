Ext.define('RentMovieApp.model.Movie', {
    extend: 'Ext.data.Model',

    fields: [{ name: 'movieId', type: 'int' },
    { name: 'title', type: 'string' },
    { name: 'isAvailable', type: 'string' },],
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
      }
});