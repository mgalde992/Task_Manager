<template>
    <div>
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.completed ? 'Yes' : 'No' }}</td>
            <td>{{ task.id }}</td>
            <td>
              <button class="delete-button" @click="removeTask(task.id)">Delete</button>
            </td>
          </tr>
          <tr v-if="tasks.length === 0">
            <td colspan="4" style="text-align: center;">No tasks available.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
      removeTask: Function,
    },
  };
  </script>