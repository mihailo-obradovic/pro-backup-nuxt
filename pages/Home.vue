<template>
  <s-tabs v-model="activeTab">
    <s-tabs-list class="flex w-full">
      <s-tabs-trigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        class="flex-1"
      >
        <PContainer gap="2" class="items-center">
          <PIcon :name="tab.icon" />
          {{ tab.label }}
        </PContainer>
      </s-tabs-trigger>
    </s-tabs-list>

    <s-tabs-content value="tasks">
      <div class="container py-10 mx-auto">
        <SampleTable :columns="columns" :data="data" />
      </div>
    </s-tabs-content>
  </s-tabs>
</template>

<script setup lang="ts">
import { columns, paymentData } from '@/components/payments/columns';
import type { Payment } from '../components/payments/columns';
import SampleTable from '../components/payments/SampleTable.vue';

const tabs = [
  {
    label: 'Tasks',
    value: 'tasks',
    icon: 'check-square'
  },
  {
    label: 'Projects',
    value: 'projects',
    icon: 'folder'
  },
  {
    label: 'Attachments',
    value: 'attachments',
    icon: 'paperclip'
  },
  {
    label: 'Comments',
    value: 'comments',
    icon: 'message-square'
  },
  {
    label: 'Custom fields',
    value: 'custom-fields',
    icon: 'grid'
  },
  {
    label: 'Goals',
    value: 'goals',
    icon: 'target'
  }
];

const activeTab = ref('tasks');

const data = ref<Payment[]>(paymentData);
</script>
