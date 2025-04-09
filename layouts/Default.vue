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

        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
          />

          <template #fallback>
            <div class="size-8" />
          </template>
        </ClientOnly>
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

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>
