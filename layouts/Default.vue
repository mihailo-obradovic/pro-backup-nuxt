<template>
  <s-sidebar-provider>
    <AppSidebar />

    <main class="h-screen w-screen flex flex-col p-4">
      <slot />
    </main>
  </s-sidebar-provider>
</template>

<script lang="ts" setup>
import AppSidebar from '@/components/AppSidebar.vue';
</script>
