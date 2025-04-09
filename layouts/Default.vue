<template>
  <div class="h-full w-full flex flex-col">
    <u-dashboard-navbar class="bg-foreground">
      <template #leading>
        <u-button variant="soft" color="neutral" icon="i-lucide-cloud">
          Home
        </u-button>

        <u-button
          variant="soft"
          color="error"
          class="bg-white"
          icon="i-lucide-shapes"
        />

        <u-button
          variant="soft"
          class="bg-[#2D314E]"
          icon="i-lucide-monitor-play"
        />

        <u-button variant="soft" class="bg-[#2D314E]" icon="i-lucide-shapes" />
      </template>

      <template #trailing>
        <u-button icon="i-lucide-plus" />
      </template>

      <template #right>
        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="white"
            @click="isDark = !isDark"
          />

          <template #fallback>
            <div class="size-8" />
          </template>
        </ClientOnly>

        <u-button color="white" icon="i-lucide-settings" />

        <u-button color="white" icon="i-lucide-user" />
      </template>
    </u-dashboard-navbar>

    <main class="p-4 flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
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
