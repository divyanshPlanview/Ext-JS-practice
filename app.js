/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'graph.Application',

    name: 'graph',

    requires: [
        // This will automatically load all classes in the graph namespace
        // so that application classes do not need to require each other.
        'graph.*'
    ],

    // The name of the initial view to create.
    mainView: 'graph.view.main.Main'
});
