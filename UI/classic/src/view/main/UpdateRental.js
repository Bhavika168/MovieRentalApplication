Ext.define('RentMovieApp.view.UpdateRental', {
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
        'RentMovieApp.store.Rental'
    ],

    title: 'Rental',

    store: {
        type: 'rental'
    },

    
    defaultType: 'textfield',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'RentalId',
        itemId: 'rentalIdField'
    },{
        xtype: 'textfield',
        fieldLabel: 'UserId',
        itemId: 'userIdField'
    },{
        xtype: 'textfield',
        fieldLabel: 'MovieId',
        itemId: 'movieIdField'
    }, {
        xtype:"datefield",
        fieldLabel: 'RentalDate',
        itemId: 'rentalDateField'
    },{
        xtype:"datefield",
        fieldLabel: 'DueDate',
        itemId: 'dueDateField'
    }, {
        xtype: 'textfield',
        fieldLabel: 'IsReturned',
        itemId: 'isReturnedField'
     }],
     
     buttons: [{
        text: 'Update',
        handler: function () {
            var rentalId = this.up('panel').down('#rentalIdField').getValue();
            var userId = this.up('panel').down('#userIdField').getValue();
            var movieId = this.up('panel').down('#movieIdField').getValue();
            var rentalDate = this.up('panel').down('#rentalDateField').getValue();
            var dueDate = this.up('panel').down('#dueDateField').getValue();
            var isReturned = this.up('panel').down('#isReturnedField').getValue();
          
            
            var rentalData = {
                rentalId: rentalId,
                userId: userId,
                movieId: movieId,
                rentalDate: rentalDate,
                dueDate: dueDate,
                isReturned: isReturned
               
            };
            var rentalStore = Ext.getStore('rental').load();
            
            var rentalRecord = rentalStore.findRecord('rentalId', rentalId);
            
            if (rentalRecord) {
                rentalRecord.set(rentalData);
                rentalStore.sync({
                    success: function (batch, options) {
                        Ext.Msg.alert('Success', 'Rental updated successfully!');
                    },
                    failure: function (batch, options) {
                        Ext.Msg.alert('Error', 'Failed to update Rental.');
                    }
                });
            } else {
                Ext.Msg.alert('Error', 'Rental not found.');
            }
        }
    }]
    
});