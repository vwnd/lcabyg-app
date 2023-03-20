<template>
  <button
    class="group relative inline-block text-sm font-medium text-slate-600 focus:outline-none focus:ring active:text-slate-500"
    href="/download"
  >
    <span
      class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-slate-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
    />

    <span class="relative block border border-current bg-white px-8 py-3">
      {{ text ? text : 'Click me' }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps(['text'])
</script>

<style scoped>

</style>
