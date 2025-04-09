<template>
  <u-tabs
    :items="tabs"
    class="h-full w-full gap-4"
    variant="link"
    :ui="{ content: 'h-full' }"
  >
    <template #tasks>
      <TasksTab />
    </template>
  </u-tabs>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';

import TasksTab from '@/components/TasksTab.vue';

const tabs = ref<TabsItem[]>([
  {
    label: 'Tasks',
    icon: 'i-lucide-check-circle',
    slot: 'tasks' as const
  },
  {
    label: 'Projects',
    icon: 'i-lucide-folder',
    content: 'This is the projects content.'
  },
  {
    label: 'Attachments',
    icon: 'i-lucide-paperclip',
    content: 'This is the attachments content.'
  },
  {
    label: 'Comments',
    icon: 'i-lucide-message-square',
    content: 'This is the comments content.'
  },
  {
    label: 'Custom Fields',
    icon: 'i-lucide-file-text',
    content: 'This is the custom fields content.'
  },
  {
    label: 'Goals',
    icon: 'i-lucide-target',
    content: 'This is the goals content.'
  }
]);
</script>
