Ext.define('RentMovieApp.view.main.List2', {
    extend: 'Ext.grid.Panel',
    xtype: 'list2',

    requires: [
        'RentMovieApp.store.Rental'
    ],

    title: 'Rental',

    store: {
        type: 'rental'
    },

    columns: [
        { text: 'RentalId',  dataIndex: 'rentalId' , flex: 1 },
        { text: 'UserId',  dataIndex: 'userId' , flex: 1 },
        { text: 'MovieId',  dataIndex: 'movieId' , flex: 1 },
        { text: 'RentalDate', dataIndex: 'rentalDate', flex: 1 },
        { text: 'DueDate', dataIndex: 'dueDate', flex: 1 },
        { text: 'IsReturned', dataIndex: 'isReturned', flex: 1 }
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
          reference:'btnadd2',
          handler:function(){
              pop=Ext.create('RentMovieApp.view.AddRental');
              pop.show()
            //   console.warn('abc')
          }
         
        },

        {
          xtype:'button',
          itemId:'edit',
          text:'Edit',
          iconCls:'x-fa-fa-pencil',
          reference:'btnedit2',
          handler:function(){
            pop=Ext.create('RentMovieApp.view.UpdateRental');
            pop.show()
            // console.warn('abc')
        }
        },
  
        {
          xtype:'button',
          itemId:'delete',
          text:'Delete',
          iconCls:'x-fa-fa-trash',
          reference:'btndelete2',
          handler:function(){
            pop=Ext.create('RentMovieApp.view.DeleteRental');
            pop.show()
            // console.warn('abc')
        }
        }
    ],
  
});
