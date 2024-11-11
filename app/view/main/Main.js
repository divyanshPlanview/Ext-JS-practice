Ext.define('TimerApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.layout.container.Fit'
    ],

    controller: 'main',  // Ensure this is correctly set

    layout: 'vbox',
    padding: 20,

    items: [

        {
            xtype: 'textfield',
            reference: 'timerDisplay',
            fieldStyle: {
                'text-align': 'center',
                'font-size': '2em'
            },
            emptyText: 'MM:SS',
            margin: '20 0'
        },

        {
            xtype: 'button',
            text: 'Start Countdown',
            margin: '10 0',
            listeners: {
                click: 'onStartCountdown'
            }
        },
        {
            xtype: 'button',
            text: 'Start',
            margin: '10 0',
            handler: 'onStartTimer'  // This should match the method in MainController.js
        },
        {
            xtype: 'button',
            text: 'Stop',
            margin: '10 0',
            handler: 'onStopTimer'   // This should match the method in MainController.js
        },
        {
            xtype: 'button',
            text: 'Reset',
            margin: '10 0',
            handler: 'onResetTimer'  // This should match the method in MainController.js
        }
    ]
});
