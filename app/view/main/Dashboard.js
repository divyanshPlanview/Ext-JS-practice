// // app/view/main/Dashboard.js
// Ext.define('CounterApp.view.main.Dashboard', {
//     extend: 'Ext.container.Container',
//     xtype: 'dashboard', // Define a custom xtype for easier reference
//
//     layout: {
//         type: 'vbox', // Vertical box layout to arrange items vertically
//         align: 'stretch'
//     },
//
//     items: [
//         {
//             xtype: 'panel',
//             title: 'Counter Section',
//             flex: 1, // Makes this panel take up part of the vertical space
//             layout: 'fit', // Allows the counter panel to expand fully within
//
//             items: [
//                 {
//                     xtype: 'counterpanel' // Reference to your counter panel component
//                 }
//             ]
//         },
//         {
//             xtype: 'panel',
//             title: 'Additional Info or Widgets',
//             flex: 1,
//             html: '<p>This is where you can add more widgets or information.</p>'
//         }
//     ]
// });
