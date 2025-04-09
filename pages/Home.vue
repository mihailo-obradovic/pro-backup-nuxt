<template>
  <div>
    <div class="flex items-center py-4 gap-6">
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

    <div class="flex items-center justify-between py-4">
      <div class="flex gap-1">
        <u-button
          v-for="tab in tabs"
          :key="tab.label"
          :icon="tab.icon"
          variant="link"
          :label="tab.label"
          color="neutral"
          size="lg"
          :active="selectedTab === tab.label"
          active-color="primary"
          @click="selectedTab = tab.label"
        />
      </div>

      <div class="flex items-center gap-4">
        <UInput class="max-w-sm min-w-[12ch]" placeholder="Filter emails..." />

        <UButton color="neutral" icon="i-lucide-funnel" label="Filter" />
      </div>
    </div>

    <TasksTab />
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';

import TasksTab from '@/components/TasksTab.vue';

const selectedTab = ref('Tasks'); // Default selected tab

const tabs = ref<TabsItem[]>([
  {
    label: 'Tasks',
    icon: 'i-lucide-check-circle'
  },
  {
    label: 'Projects',
    icon: 'i-lucide-folder'
  },
  {
    label: 'Attachments',
    icon: 'i-lucide-paperclip'
  },
  {
    label: 'Comments',
    icon: 'i-lucide-message-square'
  },
  {
    label: 'Custom Fields',
    icon: 'i-lucide-file-text'
  },
  {
    label: 'Goals',
    icon: 'i-lucide-target'
  }
]);
</script>
