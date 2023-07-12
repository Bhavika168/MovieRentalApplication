Ext.define('RentMovieApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'RentMovieApp.store.Movie'
    ],

    title: 'Movie',

    store: {
        type: 'movie'
    },

    columns: [
        { text: 'MovieId',  dataIndex: 'movieId' , flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'IsAvailable', dataIndex: 'isAvailable', flex: 1 }
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
          reference:'btnadd',
          handler:function(){
              pop=Ext.create('RentMovieApp.view.AddMovie');
              pop.show()
            //   console.warn('abc')
          }
         
        },

        {
          xtype:'button',
          itemId:'edit',
          text:'Edit',
          iconCls:'x-fa-fa-pencil',
          reference:'btnedit',
          handler:function(){
            pop=Ext.create('RentMovieApp.view.UpdateMovie');
            pop.show()
            // console.warn('abc')
        }
            
        },
  
        {
          xtype:'button',
          itemId:'delete',
          text:'Delete',
          iconCls:'x-fa-fa-trash',
          reference:'btndelete',
          handler:function(){
            
            pop=Ext.create('RentMovieApp.view.DeleteMovie');
            pop.show()
            // console.warn('abc')
        }
        
        }
    ],
  
});
