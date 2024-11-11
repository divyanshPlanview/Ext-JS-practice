// app/model/Task.js
Ext.define('ToDoApp.model.Task', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'completed', type: 'boolean', defaultValue: false }
    ]
});
