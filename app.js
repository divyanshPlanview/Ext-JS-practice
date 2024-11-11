// app.js
Ext.application({
    name: 'ToDoApp',

    launch: function() {
        Ext.create('ToDoApp.view.main.Main', {
            renderTo: Ext.getBody()
        });
    }
});
