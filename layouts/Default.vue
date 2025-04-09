<template>
  <div class="h-full w-full flex flex-col">
    <u-dashboard-navbar title="ProBackup">
      <template #leading>
        <u-dashboard-sidebar-collapse />
      </template>

      <template #trailing>
        <u-badge label="4" variant="subtle" />
      </template>

      <template #right>
        <u-tabs
          :items="items"
          default-value="all"
          size="sm"
          class="w-40"
          :content="false"
        />
      </template>
    </u-dashboard-navbar>

    <main class="p-4 flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Unread',
    value: 'unread'
  }
];
</script>
