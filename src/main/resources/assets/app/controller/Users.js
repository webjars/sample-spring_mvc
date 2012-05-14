Ext.define('USERS.controller.Users', {

    extend:'Ext.app.Controller',

    models:['User'],
    stores:['Users'],
    views:['Panel', 'Grid'],

    init:function () {
        Ext.create('Ext.panel.Panel', {
            layout:'fit',
            height:300,
            width:500,

            items:{
                xtype:'userlist'
            },

            renderTo:document.body
        });

        Ext.create('USERS.view.Grid').show();
    }
});