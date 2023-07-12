Ext.define('RentMovieApp.view.DeleteRental', {
    title: 'Delete',
    extend:'Ext.window.Window',
 
    bodyPadding: 5,
    width: 350,

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    requires: [
        'RentMovieApp.store.Rental',
        'RentMovieApp.model.Rental'
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
    },
    ],


buttons: [{
    text: 'Delete',
    handler: function () {
        var rentalId = this.up('panel').down('#rentalIdField').getValue();

        

            var rentalStore = Ext.getStore('rental');

            if (rentalStore) {
                var rentalRecord = rentalStore.getById(rentalId);

                if (rentalRecord) {
                    rentalStore.remove(rentalRecord);
                    rentalStore.sync({
                        success: function (batch, options) {
                            
                            Ext.Msg.alert('Success', 'Rental deleted successfully!');
                        },
                        failure: function (batch, options) {
                            
                            Ext.Msg.alert('Error', 'Failed to delete rental.');
                            movieStore.rejectChanges(); 
                        }
                    });
                } else {
                    Ext.Msg.alert('Error', 'Rental not found in the store.');
                }
            } else {
                Ext.Msg.alert('Error', 'Rental store is not available.');
            }

        
       
    }
}],

    
renderTo: Ext.getBody(),
});

 
  