Ext.Loader.setConfig({

    enabled:true
});

Ext.create('Ext.app.Application', {
    name:'USERS',
    autoCreateViewport:false,
    controllers:['Users'],

    launch:function () {
        console.log("Simple Ext JS mvc application with webjars, spring and Ext JS " + Ext.getVersion('extjs'));
    }
});