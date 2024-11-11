Ext.define('UserTableApp.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'email', type: 'string' },
        { name: 'dob', type: 'date' },
        { name: 'mobile', type: 'string' },
        { name: 'address', type: 'string' }
    ]
});
