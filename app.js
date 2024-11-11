/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CounterApp.Application',

    name: 'CounterApp',

    requires: [
        // This will automatically load all classes in the CounterApp namespace
        // so that application classes do not need to require each other.
        'CounterApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'CounterApp.view.main.Main'
});
