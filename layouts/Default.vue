<template>
  <s-sidebar-provider>
    <AppSidebar />

    <s-sidebar-inset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <s-sidebar-trigger class="-ml-1" />
        <s-separator orientation="vertical" class="mr-2 h-4" />
        <s-breadcrumb>
          <s-breadcrumb-list>
            <s-breadcrumb-item class="hidden md:block">
              <s-breadcrumb-link href="#">components</s-breadcrumb-link>
            </s-breadcrumb-item>
            <s-breadcrumb-separator class="hidden md:block" />
            <s-breadcrumb-item class="hidden md:block">
              <s-breadcrumb-link href="#">ui</s-breadcrumb-link>
            </s-breadcrumb-item>
            <s-breadcrumb-separator class="hidden md:block" />
            <s-breadcrumb-item>
              <s-breadcrumb-page>button.tsx</s-breadcrumb-page>
            </s-breadcrumb-item>
          </s-breadcrumb-list>
        </s-breadcrumb>
      </header>

      <main class="h-full w-full flex flex-col p-4">
        <slot />
      </main>
    </s-sidebar-inset>
  </s-sidebar-provider>
</template>

<script lang="ts" setup>
import AppSidebar from '@/components/AppSidebar.vue';
</script>
