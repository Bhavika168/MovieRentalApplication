Ext.define('RentMovieApp.view.main.List1', {
    extend: 'Ext.grid.Panel',
    xtype: 'list1',

    requires: [
        'RentMovieApp.store.User'
    ],

    title: 'User',

    store: {
        type: 'user'
    },

    columns: [
        { text: 'UserId',  dataIndex: 'userId' , flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Password', dataIndex: 'password', flex: 1 },
        { text: 'Contact', dataIndex: 'contact', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Status', dataIndex: 'status', flex: 1 }
    ],

    listeners: {
        afterrender: function() {
            this.getStore().load();
        }
    },

    tbar:[

        {
          xtype:'button',
          itemId:'add',
          text:'Add',
          iconCls:'x-fa-fa-plus',
          reference:'btnadd1',
          handler:function(){
              pop=Ext.create('RentMovieApp.view.AddUser');
              pop.show()
            //   console.warn('abc')
          }
         
        },

        {
          xtype:'button',
          itemId:'edit',
          text:'Edit',
          iconCls:'x-fa-fa-pencil',
          reference:'btnedit1',
          handler:function(){
            pop=Ext.create('RentMovieApp.view.UpdateUser');
            pop.show()
            // console.warn('abc')
        }
            
        },
  
        {
          xtype:'button',
          itemId:'delete',
          text:'Delete',
          iconCls:'x-fa-fa-trash',
          reference:'btndelete1',
          handler:function(){
            pop=Ext.create('RentMovieApp.view.DeleteUser');
            pop.show()
            // console.warn('abc')
        }
         
        }
    ],
  
});
