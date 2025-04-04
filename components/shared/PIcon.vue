<template>
  <icon v-bind="$attrs" :name="`lucide:${name}`" />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>
