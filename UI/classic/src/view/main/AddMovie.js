Ext.define('RentMovieApp.view.AddMovie', {
    title: 'Add',
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
    
    buttons: [
        {
        text: 'Add',
        handler: function () {
            var movieId = this.up('panel').down('#movieIdField').getValue();
            var title = this.up('panel').down('#titleField').getValue();
            var isAvailable = this.up('panel').down('#isAvailableField').getValue();
          
            
            var movieData = {
                movieId: movieId,
                title: title,
                isAvailable: isAvailable,
               
            };

            var movieStore=Ext.create('RentMovieApp.store.Movie');
            // var movieStore = Ext.getStore('movie');

            movieStore.add(movieData);
            movieStore.sync({
                success: function (batch, options) {
                    Ext.Msg.alert('Success', 'Movie added successfully!');
                },
                failure: function (batch, options) {
                    Ext.Msg.alert('Error', 'Failed to add Movie.');
                }
            });
        }
    }
    
]
});