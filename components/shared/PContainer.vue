<template>
  <component
    :is="dynamicComponent"
    :class="['flex', gapClass, { 'flex-col': column }]"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String, // HTML element or ShadCN-Vue component.
    default: 'div'
  },

  column: {
    type: Boolean,
    default: false
  },

  gap: {
    type: String, // easurement unit
    default: '4'
  }
});

const dynamicComponent = computed(() => {
  switch (props.type) {
    default:
      return props.type;
  }
});

const gapClass = computed(() => {
  switch (props.gap) {
    case '1':
      return 'gap-1';
    case '2':
      return 'gap-2';
    case '3':
      return 'gap-3';
    case '4':
      return 'gap-4';
    case '5':
      return 'gap-5';
    case '6':
      return 'gap-6';
    case '8':
      return 'gap-8';
    case '10':
      return 'gap-10';
    case '12':
      return 'gap-12';
    case '16':
      return 'gap-16';
    case '20':
      return 'gap-20';
    case '24':
      return 'gap-24';
    case '32':
      return 'gap-32';
    case '40':
      return 'gap-40';
    case '48':
      return 'gap-48';
    case '56':
      return 'gap-56';
    case '64':
      return 'gap-64';
    case '0':
    default:
      return 'gap-0';
  }
});
</script>
