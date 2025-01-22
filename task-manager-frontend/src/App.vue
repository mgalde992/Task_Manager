<template>
  <div>
    <h1>Task Management</h1>
    <TaskForm @task-added="addTask" />
    <TaskList :tasks="tasks" :removeTask="removeTask" />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import { fetchTasks, addTask as apiAddTask, deleteTask as apiDeleteTask } from './utils/api';

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.loadTasks();
  },
  methods: {
    async loadTasks() {
      this.tasks = await fetchTasks(); // Load tasks from API
    },
    async addTask(newTask) {
      const addedTask = await apiAddTask(newTask); // Add task to API
      this.tasks.push(addedTask); // Add the new task to local state
    },
    async removeTask(id) {
      await apiDeleteTask(id); // Remove task from API
      this.tasks = this.tasks.filter(task => task.id !== id); // Remove from local state
    },
  },
};
</script>