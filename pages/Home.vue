<template>
  <v-container class="fill-height d-flex flex-column">
    <v-tabs
      v-model="activeTab"
      bg-color="background"
      align-tabs="start"
      class="flex-grow-0"
    >
      <v-tab v-for="tab in tabs" :key="tab.name">
        <v-icon>{{ tab.icon }}</v-icon>
        {{ tab.name.charAt(0).toUpperCase() + tab.name.slice(1) }}
      </v-tab>
    </v-tabs>
  </v-container>
</template>

<script setup>
const activeTab = ref('tasks');

const tabs = [
  { name: 'tasks', icon: 'mdi-check-circle' },
  { name: 'projects', icon: 'mdi-folder' },
  { name: 'attachments', icon: 'mdi-paperclip' },
  { name: 'comments', icon: 'mdi-comment' },
  { name: 'customFields', icon: 'mdi-form-textbox' },
  { name: 'goals', icon: 'mdi-target' }
];
</script>
