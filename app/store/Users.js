// app/store/Users.js
Ext.define('UserTableApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users', // Adding alias for reference

    model: 'UserTableApp.model.User',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/api/users',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },

    autoLoad: true
});
