<template>
  <div class="flex flex-col space-y-6 md:max-w-md border border-current p-6 mx-auto">
    <label for="file-input" class="block text-xs font-medium text-gray-700 mb-2">Data Input</label>
    <div class="mt-2 sm:col-span-2 sm:mt-0">
      <div class="flex max-w-lg justify-center border border-dashed border-slate-500 px-6 pt-5 pb-6">
        <div class="space-y-1 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-slate-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-500 focus-within:ring-offset-2 hover:text-slate-500">
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only">
            </label>
            <p class="pl-1">
              or drag and drop
            </p>
          </div>
          <p class="text-xs text-gray-500">
            .JSON only
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
