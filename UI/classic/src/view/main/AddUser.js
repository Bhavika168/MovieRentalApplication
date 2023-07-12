Ext.define('RentMovieApp.view.AddUser', {
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
        'RentMovieApp.store.User'
    ],

    title: 'User',

    store: {
        type: 'user'
    },

    
    defaultType: 'textfield',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'UserId',
        itemId: 'userIdField'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Name',
        itemId: 'nameField'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Password',
        itemId: 'passwordField'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Contact',
        itemId: 'contactField'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Email',
        itemId: 'emailField'
     },{
        xtype: 'textfield',
        fieldLabel: 'Status',
        itemId: 'statusField'
     }],
    
    buttons: [{
        text: 'Add',
        handler: function () {
            var userId = this.up('panel').down('#userIdField').getValue();
            var name = this.up('panel').down('#nameField').getValue();
            var password = this.up('panel').down('#passwordField').getValue();
            var contact = this.up('panel').down('#contactField').getValue();
            var email = this.up('panel').down('#emailField').getValue();
            var status = this.up('panel').down('#statusField').getValue();
          
            
            var userData = {
                userId: userId,
                name: name,
                password: password,
                contact: contact,
                email: email,
                status: status
               
            };

            userStore=Ext.create('RentMovieApp.store.User');

            userStore.add(userData);
            userStore.sync({
                success: function (batch, options) {
                    Ext.Msg.alert('Success', 'User added successfully!');
                },
                failure: function (batch, options) {
                    Ext.Msg.alert('Error', 'Failed to add User.');
                }
            });
        }
    }]
});