<template>
  <div class="flex p-4 gap-4 h-full">
    <UTree :items="items" />

    <SampleTable />
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
