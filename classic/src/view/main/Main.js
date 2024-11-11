Ext.define('graph.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.CartesianChart'
    ],

    layout: 'vbox',

    items: [
        {
            xtype: 'polar',
            width: 500,
            height: 500,
            insetPadding: 50,
            interactions: ['rotate', 'itemhighlight'],
            store: {
                fields: ['name', 'value1', 'value2'],
                data: [
                    { name: 'Category 1', value1: 80, value2: 50 },
                    { name: 'Category 2', value1: 90, value2: 60 },
                    { name: 'Category 3', value1: 75, value2: 70 }
                ]
            },
            series: [{
                type: 'radar',
                angleField: 'name',
                radiusField: 'value1',
                style: {
                    fillStyle: 'rgba(0,128,255,0.2)',
                    strokeStyle: 'blue',
                    lineWidth: 2
                }
            }, {
                type: 'radar',
                angleField: 'name',
                radiusField: 'value2',
                style: {
                    fillStyle: 'rgba(255,128,0,0.2)',
                    strokeStyle: 'orange',
                    lineWidth: 2
                }
            }],
            captions: {
                title: 'Radar Chart Example'
            }
        },
        {
            xtype: 'cartesian',
            width: '100%',
            height: 400,
            insetPadding: '20 20 20 20',
            store: {
                fields: ['name', 'actualHours', 'demandHours', 'actualCost', 'demandCost'],
                data: [
                    { name: 'Project A', actualHours: 2000, demandHours: 2400, actualCost: 200000, demandCost: 240000 },
                    { name: 'Project B', actualHours: 3000, demandHours: 3200, actualCost: 150000, demandCost: 275000 },
                    { name: 'Project C', actualHours: 1200, demandHours: 400, actualCost: 50000, demandCost: 50000 }
                ]
            },
            axes: [{
                type: 'numeric',
                position: 'left',
                title: 'Values',
                grid: true,
                fields: ['actualHours', 'demandHours', 'actualCost', 'demandCost']
            }, {
                type: 'category',
                position: 'bottom',
                title: 'Projects',
                fields: ['name']
            }],
            series: [{
                type: 'line',
                xField: 'name',
                yField: 'actualHours',
                title: 'Actual Hours',
                style: {
                    stroke: 'red',
                    lineWidth: 2
                },
                marker: {
                    type: 'circle',
                    radius: 4,
                    fill: 'red'
                }
            }, {
                type: 'line',
                xField: 'name',
                yField: 'demandHours',
                title: 'Demand Hours',
                style: {
                    stroke: 'yellow',
                    lineWidth: 2
                },
                marker: {
                    type: 'circle',
                    radius: 4,
                    fill: 'yellow'
                }
            }, {
                type: 'line',
                xField: 'name',
                yField: 'actualCost',
                title: 'Actual Cost',
                style: {
                    stroke: 'blue',
                    lineWidth: 2
                },
                marker: {
                    type: 'circle',
                    radius: 4,
                    fill: 'blue'
                }
            }, {
                type: 'line',
                xField: 'name',
                yField: 'demandCost',
                title: 'Demand Cost',
                style: {
                    stroke: 'purple',
                    lineWidth: 2
                },
                marker: {
                    type: 'circle',
                    radius: 4,
                    fill: 'purple'
                }
            }],
            captions: {
                title: 'Line Chart Example'
            }
        }
    ]
});
