Ext.define('ToDoApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main', // Matches the controller specified in Main.js

    onAddTask: function() {
        const view = this.getView();
        const newTaskField = view.lookupReference('newTaskField'); // Reference to the input field

        const taskName = newTaskField.getValue(); // Get the value entered by the user

        if (taskName) {
            const viewModel = this.getViewModel();
            const tasksStore = viewModel.getStore('tasks'); // Ensure 'tasks' store is properly configured

            // Add the new task with the dynamic name
            tasksStore.add({
                name: taskName,
                completed: false
            });

            // Clear the input field after adding the task
            newTaskField.setValue('');
        } else {
            Ext.Msg.alert('Error', 'Please enter a task name.');
        }
    },

    onDeleteTask: function() {
        const view = this.getView();
        const grid = view.down('grid');
        const selectedTask = grid.getSelection()[0];

        if (selectedTask) {
            const tasksStore = grid.getStore();
            tasksStore.remove(selectedTask);
        } else {
            Ext.Msg.alert('Error', 'Please select a task to delete.');
        }
    }
});
