<template>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask.title" placeholder="Task Title" required />
      <select v-model="newTask.completed">
        <option :value="true">Completed</option>
        <option :value="false">Not Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: {
          title: '',
          completed: false,
        },
      };
    },
    methods: {
      async addTask() {
        this.$emit('task-added', { ...this.newTask });
        this.resetForm();
      },
      resetForm() {
        this.newTask.title = '';
        this.newTask.completed = false;
      },
    },
  };
  </script>