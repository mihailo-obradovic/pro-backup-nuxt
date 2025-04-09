<template>
  <div class="flex gap-4 h-full">
    <u-card>
      <UTree :items="items" />
    </u-card>

    <u-card class="w-full">
      <SampleTable />
    </u-card>
  </div>
</template>

<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui';
import SampleTable from './SampleTable.vue';

const items = ref<TreeItem[]>([
  {
    label: 'Workspace 1',
    defaultExpanded: true,
    children: [
      {
        label: 'Team A',
        defaultExpanded: true,
        children: [
          { label: 'Project A' },
          { label: 'Project B' },
          { label: 'Project C' }
        ]
      },
      {
        label: 'Team B',
        defaultExpanded: false,
        children: [{ label: 'Project D' }, { label: 'Project E' }]
      },
      {
        label: 'Team C'
      }
    ]
  },
  { label: 'Workspace 2' },
  { label: 'Workspace 3' }
]);
</script>
