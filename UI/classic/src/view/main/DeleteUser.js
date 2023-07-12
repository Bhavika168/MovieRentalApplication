Ext.define('RentMovieApp.view.DeleteUser', {
    title: 'Delete',
    extend:'Ext.window.Window',
 
    bodyPadding: 5,
    width: 350,

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    requires: [
        'RentMovieApp.store.User',
        'RentMovieApp.model.User'
    ],

    title: 'User',
    // store: Ext.create('RentMovieApp.store.User'),
    store: {
        type: 'user'
    },

    
    defaultType: 'textfield',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'UserId',
        itemId: 'userIdField'
    },
    ],


buttons: [{
    text: 'Delete',
    handler: function () {
        var userId = this.up('panel').down('#userIdField').getValue();

            var userStore = Ext.getStore('user');
            // userStore.load();

            if (userStore) {
                var userRecord = userStore.getById(userId);

                if (userRecord) {
                    userStore.remove(userRecord);
                    userStore.sync({
                        success: function (batch, options) {
                            
                            Ext.Msg.alert('Success', 'User deleted successfully!');
                        },
                        failure: function (batch, options) {
                            
                            Ext.Msg.alert('Error', 'Failed to delete user.');
                            movieStore.rejectChanges(); 
                        }
                    });
                } else {
                    Ext.Msg.alert('Error', 'User not found in the store.');
                }
            } else {
                Ext.Msg.alert('Error', 'User store is not available.');
            }

       
    }
}],

    
renderTo: Ext.getBody(),
});
  