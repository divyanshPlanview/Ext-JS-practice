// app/store/Tasks.js
Ext.define('ToDoApp.store.Tasks', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',
    model: 'ToDoApp.model.Task',

    data: [
        // Example data to populate initially
        { id: 1, name: 'Sample Task 1', completed: false },
        { id: 2, name: 'Sample Task 2', completed: true }
    ],

    autoLoad: true,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});
