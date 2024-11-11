// app/view/main/Main.js
Ext.define('CounterApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    viewModel: {
        type: 'main' // Bind this container to the main view model
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        // Dashboard Toolbar at the top
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                { xtype: 'component', html: '<h3>Dashboard</h3>', margin: '0 20 0 0' },
                { xtype: 'button', text: 'Home', handler: function() { /* Handler for Home */ } },
                { xtype: 'button', text: 'Settings', handler: function() { /* Handler for Settings */ } },
                { xtype: 'button', text: 'Help', handler: function() { /* Handler for Help */ } },
                {
                    xtype: 'button',
                    text: 'API Data',
                    href: 'http://localhost:1841/', // Redirect link to API Data
                    hrefTarget: '_blank' // Opens link in a new tab
                }
            ]
        },
        // Main counter panel
        {
            xtype: 'panel',
            title: 'Counter',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            flex: 1, // Allows the counter panel to fill remaining vertical space

            items: [
                {
                    xtype: 'component',
                    bind: {
                        html: '<h1>Counter: {counterValue}</h1>' // Display counter value
                    },
                    itemId: 'counterDisplay'
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Increment',
                            margin: '0 10',
                            handler: function() {
                                var viewModel = this.up('app-main').getViewModel();
                                viewModel.set('counterValue', viewModel.get('counterValue') + 1);
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Decrement',
                            margin: '0 10',
                            handler: function() {
                                var viewModel = this.up('app-main').getViewModel();
                                viewModel.set('counterValue', viewModel.get('counterValue') - 1);
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
