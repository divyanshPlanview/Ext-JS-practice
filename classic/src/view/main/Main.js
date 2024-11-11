Ext.define('ganttApp.view.main.Main', {
    extend: 'Ext.container.Viewport',  // Ext.container.Viewport to take up the whole browser window
    requires: [
        'ganttApp.view.gantt.GanttChart'  // Include your custom GanttChart view
    ],

    layout: 'fit',  // Ensures the Gantt chart takes up the available space

    items: [
        {
            xtype: 'ganttchart'  // Reference the custom xtype defined in GanttChart.js
        }
    ]
});
