Ext.define('ganttApp.view.gantt.GanttChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'ganttchart',
    title: 'Gantt Chart',
    layout: 'fit',

    items: [
        {
            xtype: 'grid',
            reference: 'ganttGrid',
            store: {
                fields: ['task', 'startDate', 'endDate', 'percentComplete'],
                data: [
                    { task: 'Planning', startDate: new Date('2023-01-01'), endDate: new Date('2023-03-31'), percentComplete: 50 },
                    { task: 'Research', startDate: new Date('2023-04-01'), endDate: new Date('2023-06-30'), percentComplete: 30 },
                    { task: 'Design', startDate: new Date('2023-07-01'), endDate: new Date('2023-09-30'), percentComplete: 70 },
                    { task: 'Implementation', startDate: new Date('2023-10-01'), endDate: new Date('2023-12-31'), percentComplete: 80 },
                    { task: 'Follow up', startDate: new Date('2024-01-01'), endDate: new Date('2024-03-31'), percentComplete: 40 }
                ]
            },
            columns: [
                {
                    text: 'Task Name',
                    dataIndex: 'task',
                    width: 150,
                    flex: 0,
                    locked: true
                },
                {
                    text: 'Start Date',
                    dataIndex: 'startDate',
                    xtype: 'datecolumn',
                    format: 'Y-m-d',
                    width: 120,
                    locked: true,
                    flex: 0,
                },
                {
                    text: 'End Date',
                    dataIndex: 'endDate',
                    xtype: 'datecolumn',
                    format: 'Y-m-d',
                    width: 120,
                    flex: 0,
                    locked: true
                },
                {
                    text: '% Complete',
                    dataIndex: 'percentComplete',
                    xtype: 'numbercolumn',
                    format: '0%',
                    width: 120,
                    flex: 0,
                    locked: true,
                    renderer: function (value) {
                        return value ? value + '%' : '';
                    },
                },
                {
                    text: 'Timeline',
                    columns: (() => {
                        const years = [2023, 2024, 2025];
                        const columns = [];

                        years.forEach(year => {
                            const yearColumn = {
                                text: year.toString(),
                                flex: 1,
                                minWidth: 150,
                                columns: [
                                    {
                                        text: 'Q1',
                                        dataIndex: `q1_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 1);
                                        }
                                    },
                                    {
                                        text: 'Q2',
                                        dataIndex: `q2_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 2);
                                        }
                                    },
                                    {
                                        text: 'Q3',
                                        dataIndex: `q3_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 3);
                                        }
                                    },
                                    {
                                        text: 'Q4',
                                        dataIndex: `q4_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 4);
                                        }
                                    }
                                ]
                            };
                            columns.push(yearColumn);
                        });

                        return columns;
                    })(),
                }
            ],

            getGanttRenderer: function (metaData, record, year, quarter) {
                const startDate = record.get('startDate');
                const endDate = record.get('endDate');
                const quarterStartMonth = (quarter - 1) * 3;
                const quarterEndMonth = quarterStartMonth + 2;

                if (startDate.getFullYear() === year && startDate.getMonth() >= quarterStartMonth && startDate.getMonth() <= quarterEndMonth) {
                    const quarterStartDate = new Date(year, quarterStartMonth, 1);
                    const quarterEndDate = new Date(year, quarterEndMonth + 1, 0);

                    const daysInQuarter = (quarterEndDate - quarterStartDate) / (1000 * 60 * 60 * 24) + 1;
                    const taskStart = Math.max((startDate - quarterStartDate) / (1000 * 60 * 60 * 24), 0);
                    const taskEnd = Math.min((endDate - quarterStartDate) / (1000 * 60 * 60 * 24), daysInQuarter);

                    const barWidth = ((taskEnd - taskStart) / daysInQuarter) * 100;

                    // Return the div with width for Gantt bar
                    return `<div style="position: relative; height: 20px; background-color: lightgray;">
                            <div style="position: absolute; width: ${barWidth}%; background-color: #4CAF50; height: 20px;">
                            </div>
                        </div>`;
                }
                return '';
            },

            tbar: [
                {
                    xtype: 'textfield',
                    reference: 'taskNameField',
                    emptyText: 'Enter task name',
                    width: 150
                },
                {
                    xtype: 'datefield',
                    reference: 'startDateField',
                    fieldLabel: 'Start Date',
                    format: 'Y-m-d',
                    width: 150
                },
                {
                    xtype: 'datefield',
                    reference: 'endDateField',
                    fieldLabel: 'End Date',
                    format: 'Y-m-d',
                    width: 150
                },
                {
                    xtype: 'button',
                    text: 'Add Task',
                    handler: function () {
                        const grid = Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0];
                        const taskNameField = Ext.ComponentQuery.query('textfield[reference=taskNameField]')[0];
                        const startDateField = Ext.ComponentQuery.query('datefield[reference=startDateField]')[0];
                        const endDateField = Ext.ComponentQuery.query('datefield[reference=endDateField]')[0];

                        if (grid && taskNameField && startDateField && endDateField) {
                            const taskName = taskNameField.getValue();
                            const startDate = startDateField.getValue();
                            const endDate = endDateField.getValue();

                            if (taskName && startDate && endDate) {
                                grid.getStore().add({
                                    task: taskName,
                                    startDate: startDate,
                                    endDate: endDate,
                                    percentComplete: 0
                                });

                                taskNameField.setValue('');
                                startDateField.setValue(null);
                                endDateField.setValue(null);
                            } else {
                                Ext.Msg.alert('Error', 'Please fill in all fields (Task Name, Start Date, and End Date).');
                            }
                        } else {
                            Ext.Msg.alert('Error', 'Could not access the fields or grid.');
                        }
                    }
                }
            ]
        }
    ]
});Ext.define('ganttApp.view.gantt.GanttChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'ganttchart',
    title: 'Gantt Chart',
    layout: 'fit',

    items: [
        {
            xtype: 'grid',
            reference: 'ganttGrid',
            store: {
                fields: ['task', 'startDate', 'endDate', 'percentComplete'],
                data: [
                    { task: 'Planning', startDate: new Date('2023-01-01'), endDate: new Date('2023-03-31'), percentComplete: 50 },
                    { task: 'Research', startDate: new Date('2023-04-01'), endDate: new Date('2023-06-30'), percentComplete: 30 },
                    { task: 'Design', startDate: new Date('2023-07-01'), endDate: new Date('2023-09-30'), percentComplete: 70 },
                    { task: 'Implementation', startDate: new Date('2023-10-01'), endDate: new Date('2023-12-31'), percentComplete: 80 },
                    { task: 'Follow up', startDate: new Date('2024-01-01'), endDate: new Date('2024-03-31'), percentComplete: 40 }
                ]
            },
            columns: [
                {
                    text: 'Task Name',
                    dataIndex: 'task',
                    width: 150,
                    flex: 0,
                    locked: true
                },
                {
                    text: 'Start Date',
                    dataIndex: 'startDate',
                    xtype: 'datecolumn',
                    format: 'Y-m-d',
                    width: 120,
                    locked: true,
                    flex: 0,
                },
                {
                    text: 'End Date',
                    dataIndex: 'endDate',
                    xtype: 'datecolumn',
                    format: 'Y-m-d',
                    width: 120,
                    flex: 0,
                    locked: true
                },
                {
                    text: '% Complete',
                    dataIndex: 'percentComplete',
                    xtype: 'numbercolumn',
                    format: '0%',
                    width: 120,
                    flex: 0,
                    locked: true,
                    renderer: function (value) {
                        return value ? value + '%' : '';
                    },
                },
                {
                    text: 'Timeline',
                    columns: (() => {
                        const years = [2023, 2024, 2025];
                        const columns = [];

                        years.forEach(year => {
                            const yearColumn = {
                                text: year.toString(),
                                flex: 1,
                                minWidth: 150,
                                columns: [
                                    {
                                        text: 'Q1',
                                        dataIndex: `q1_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 1);
                                        }
                                    },
                                    {
                                        text: 'Q2',
                                        dataIndex: `q2_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 2);
                                        }
                                    },
                                    {
                                        text: 'Q3',
                                        dataIndex: `q3_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 3);
                                        }
                                    },
                                    {
                                        text: 'Q4',
                                        dataIndex: `q4_${year}`,
                                        width: 120,
                                        renderer: function (value, metaData, record) {
                                            return Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0].getGanttRenderer(metaData, record, year, 4);
                                        }
                                    }
                                ]
                            };
                            columns.push(yearColumn);
                        });

                        return columns;
                    })(),
                }
            ],

            getGanttRenderer: function (metaData, record, year, quarter) {
                const startDate = record.get('startDate');
                const endDate = record.get('endDate');
                const quarterStartMonth = (quarter - 1) * 3;
                const quarterEndMonth = quarterStartMonth + 2;

                // Define start and end dates for the quarter
                const quarterStartDate = new Date(year, quarterStartMonth, 1);
                const quarterEndDate = new Date(year, quarterEndMonth + 1, 0); // End of the quarter

                // Check if the task is within or overlaps this quarter
                if (endDate >= quarterStartDate && startDate <= quarterEndDate) {
                    const quarterDays = (quarterEndDate - quarterStartDate) / (1000 * 60 * 60 * 24) + 1;

                    // Calculate the position and width of the Gantt bar within the quarter
                    const taskStart = Math.max((startDate - quarterStartDate) / (1000 * 60 * 60 * 24), 0);
                    const taskEnd = Math.min((endDate - quarterStartDate) / (1000 * 60 * 60 * 24), quarterDays);

                    const barWidth = ((taskEnd - taskStart) / quarterDays) * 100;

                    return `<div style="position: relative; height: 20px; background-color: lightgray;">
                    <div style="position: absolute; left: ${((taskStart / quarterDays) * 100)}%; 
                                 width: ${barWidth}%; background-color: #4CAF50; height: 20px;">
                    </div>
                </div>`;
                }
                return '';
            },

            tbar: [
                {
                    xtype: 'textfield',
                    reference: 'taskNameField',
                    emptyText: 'Enter task name',
                    width: 150
                },
                {
                    xtype: 'datefield',
                    reference: 'startDateField',
                    fieldLabel: 'Start Date',
                    format: 'Y-m-d',
                    width: 150
                },
                {
                    xtype: 'datefield',
                    reference: 'endDateField',
                    fieldLabel: 'End Date',
                    format: 'Y-m-d',
                    width: 150
                },
                {
                    xtype: 'button',
                    text: 'Add Task',
                    handler: function () {
                        const grid = Ext.ComponentQuery.query('grid[reference=ganttGrid]')[0];
                        const taskNameField = Ext.ComponentQuery.query('textfield[reference=taskNameField]')[0];
                        const startDateField = Ext.ComponentQuery.query('datefield[reference=startDateField]')[0];
                        const endDateField = Ext.ComponentQuery.query('datefield[reference=endDateField]')[0];

                        if (grid && taskNameField && startDateField && endDateField) {
                            const taskName = taskNameField.getValue();
                            const startDate = startDateField.getValue();
                            const endDate = endDateField.getValue();

                            if (taskName && startDate && endDate) {
                                grid.getStore().add({
                                    task: taskName,
                                    startDate: startDate,
                                    endDate: endDate,
                                    percentComplete: 0
                                });

                                taskNameField.setValue('');
                                startDateField.setValue(null);
                                endDateField.setValue(null);
                            } else {
                                Ext.Msg.alert('Error', 'Please fill in all fields (Task Name, Start Date, and End Date).');
                            }
                        } else {
                            Ext.Msg.alert('Error', 'Could not access the fields or grid.');
                        }
                    }
                }
            ]
        }
    ]
});

