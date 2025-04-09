<template>
  <u-page>
    <div class="flex items-center p-4 gap-6">
      <div class="font-medium text-3xl">AirTable</div>

      <div class="flex gap-4">
        <div class="text-sm flex items-center gap-1">
          <UIcon name="logos:google-drive" />
          Google Drive synced
        </div>
        <div class="text-sm flex items-center gap-1">
          <UIcon name="i-lucide-shield" />
          Last Backup: 2025-05-25
        </div>
        <div class="text-sm flex items-center gap-1">
          <UIcon name="i-lucide-info" />
          Warnings: 0
        </div>
      </div>

      <div class="flex-1" />

      <u-button
        icon="i-lucide-chart-no-axes-column"
        variant="outline"
        color="neutral"
        size="lg"
      >
        Reports
      </u-button>
    </div>

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
  </u-page>
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
