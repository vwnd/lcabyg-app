<template>
  <div class="flex flex-col space-y-6 md:max-w-md border border-current p-6">
    <div class="block text-xs font-medium text-gray-700 mb-2">
      Loaded Files
    </div>
    <div v-if="projectData.length > 0">
      <div v-for="file in projectData" :key="file.fileName" class="text-xs font-mono">
        {{ file.fileName }}
      </div>
    </div>
    <div v-else class="text-xs font-mono">
      No file loaded yet.
    </div>
  </div>
</template>

<script setup>
const projectData = useProjectData()
</script>

<style lang="scss" scoped>

</style>
