
Ext.define('UserTableApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'UserTableApp.store.Users'
    ],

    viewModel: 'main',
    controller: 'main',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'grid',
            title: 'User Data',
            flex: 1,
            store: {
                type: 'users' // Make sure this matches the alias in Users.js
            },
            columns: [
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Age', dataIndex: 'age', flex: 1 },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Date of Birth', dataIndex: 'dob', flex: 1, xtype: 'datecolumn', format: 'Y-m-d' },
                { text: 'Mobile', dataIndex: 'mobile', flex: 1 },
                { text: 'Address', dataIndex: 'address', flex: 1 }
            ]
        }
    ]
});
