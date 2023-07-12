Ext.define('RentMovieApp.view.UpdateMovie', {
    title: 'Update',
    extend:'Ext.window.Window',
    bodyPadding: 5,
    width: 350,

    renderTo: Ext.getBody(),

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    requires: [
        'RentMovieApp.store.Movie'
    ],

    title: 'Movie',

    store: {
        type: 'movie'
    },

    
    defaultType: 'textfield',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'MovieId',
        itemId: 'movieIdField'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Title',
        itemId: 'titleField'
    }, {
        xtype: 'textfield',
        fieldLabel: 'IsAvailable',
        itemId: 'isAvailableField'
     }],
    
     buttons: [{
        text: 'Update',
        handler: function () {
            var movieId = this.up('panel').down('#movieIdField').getValue();
            var title = this.up('panel').down('#titleField').getValue();
            var isAvailable = this.up('panel').down('#isAvailableField').getValue();
          
            
            var movieData = {
                movieId: movieId,
                title: title,
                isAvailable: isAvailable,
               
            };
    
            var movieStore = Ext.getStore('movie').load();
            
            var movieRecord = movieStore.findRecord('movieId', movieId);
            
            if (movieRecord) {
                movieRecord.set(movieData);
                movieStore.sync({
                    success: function (batch, options) {
                        Ext.Msg.alert('Success', 'Movie updated successfully!');
                    },
                    failure: function (batch, options) {
                        Ext.Msg.alert('Error', 'Failed to update Movie.');
                    }
                });
            } else {
                Ext.Msg.alert('Error', 'Movie not found.');
            }
        }
    }]
    
});