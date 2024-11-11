Ext.define('ToDoApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    stores: {
        tasks: {
            type: 'tasks', // This must match your store alias
            autoLoad: true
        }
    }
});
