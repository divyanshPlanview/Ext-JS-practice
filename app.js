/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'UserTableApp.Application',

    name: 'UserTableApp',

    requires: [
        // This will automatically load all classes in the UserTableApp namespace
        // so that application classes do not need to require each other.
        'UserTableApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'UserTableApp.view.main.Main'
});
