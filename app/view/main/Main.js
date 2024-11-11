Ext.define('ToDoApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'ToDoApp.store.Tasks',
        'ToDoApp.view.main.MainController', // Ensure controller is required
        'ToDoApp.view.main.MainModel'
    ],

    controller: 'main', // This should match the alias in MainController.js
    viewModel: {
        type: 'main'
    },

    layout: 'vbox',
    padding: 20,

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'New Task',
            reference: 'newTaskField',
            emptyText: 'Enter a new task'
        },
        {
            xtype: 'button',
            text: 'Add Task',
            margin: '10 0',
            handler: 'onAddTask'
        },
        {
            xtype: 'grid',
            title: 'To-Do List',
            bind: {
                store: '{tasks}'  // Bind the grid to the ViewModel store
            },
            columns: [
                { text: 'ID', dataIndex: 'id', width: 50 },
                { text: 'Task', dataIndex: 'name', flex: 1 },
                {
                    xtype: 'checkcolumn',
                    text: 'Completed',
                    dataIndex: 'completed',
                    width: 100
                },
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    items: [
                        {
                            iconCls: 'x-fa fa-trash',
                            tooltip: 'Delete Task',
                            handler: 'onDeleteTask'
                        }
                    ]
                },
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    items: [
                        {
                            iconCls: 'x-fa fa-edit',
                            tooltip: 'Edit Task',
                            handler: 'onEditTask'  // Call the handler function for editing
                        },
                        {
                            iconCls: 'x-fa fa-trash',
                            tooltip: 'Delete Task',
                            handler: 'onDeleteTask'
                        }
                    ]
                }

            ],
            height: 300,
            width: '100%'
        }
    ]
});
