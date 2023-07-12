Ext.define('RentMovieApp.view.DeleteMovie', {
  extend: 'Ext.window.Window',
  title: 'Delete',
  bodyPadding: 5,
  width: 350,
  layout: 'anchor',
  defaults: {
    anchor: '100%'
  },
  requires: [
    'RentMovieApp.store.Movie',
    'RentMovieApp.model.Movie'
  ],
  title: 'Movie',
  store: Ext.create('RentMovieApp.store.Movie'), 

  // store: null,            //

  defaultType: 'textfield',
  items: [{
    xtype: 'textfield',
    fieldLabel: 'MovieId',
    itemId: 'movieIdField',
  }],


  listeners: {        
    afterrender: function (component) {
      var movieStore = component.store;
      movieStore.load({
        callback: function (records, operation, success) {
          if (success) {
            console.log('Store loaded Successfully.');  //working
            console.log(movieStore.getData());
          } else {
            console.log('Failed to load store.');
          }
        }
      });
    }
  },


  buttons: [{
    text: 'Delete',
    handler: function () {
      var movieId = this.up('panel').down('#movieIdField').getValue();
      var movieStore = this.up('window').store;
  
      if (movieStore) {
        movieStore.load({
          callback: function (records, operation, success) {
            var movieRecord = movieStore.findRecord('movieId', movieId);   //working
            console.log(movieRecord);

            if (movieRecord) {
              Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this movie?', function (choice) {
                if (choice === 'yes') {

                  movieRecord.erase({
                    success: function () {
                      movieStore.remove(movieRecord);
                      movieStore.sync({
                        success: function () {
                          Ext.Msg.alert('Success', 'Movie deleted successfully!');
                        },
                        failure: function () {
                          Ext.Msg.alert('Error', 'Failed to delete movie.');
                        }
                      });
                    },
                    failure: function () {
                      Ext.Msg.alert('Error', 'Failed to delete the movie.');
                    }
                  });
                }
              });
            } else {
              Ext.Msg.alert('Error', 'Movie not found in the store.');
            }
          }
        });
      } else {
        Ext.Msg.alert('Error', 'Movie store is not available.');
      }
    }
  }],
  
  // setStore: function (store) {
  //   this.store = store;
  // },

  // // Custom method to get the store instance
  // getStore: function () {
  //   return this.store;
  // }
  
});
