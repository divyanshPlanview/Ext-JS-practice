/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TimerApp.Application',

    name: 'TimerApp',

    requires: [
        // This will automatically load all classes in the TimerApp namespace
        // so that application classes do not need to require each other.
        'TimerApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'TimerApp.view.main.Main'
});
