<template>
  <form
    @submit.prevent
    class="flex flex-col space-y-6 md:max-w-md border border-current p-6 mx-auto"
  >
    <div>
      <label for="Username" class="block text-xs font-medium text-gray-700"> Email </label>

      <input
        v-model="username"
        type="email"
        id="Username"
        placeholder="your@email.com"
        class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm focus:ring-0 focus:ring-gray-700 focus:outline-none focus:border-gray-700"
      />
    </div>
    <div>
      <label for="Password" class="block text-xs font-medium text-gray-700"> Password </label>

      <input
        v-model="password"
        type="password"
        id="Password"
        class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm focus:ring-0 focus:ring-gray-700 focus:outline-none focus:border-gray-700"
      />
    </div>
    <!-- Base -->

    <button
      class="group relative inline-block text-sm font-medium text-slate-600 focus:outline-none focus:ring active:text-slate-500"
      type="submit"
      @click="api.login(username, password)"
    >
      <span
        class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-slate-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
      ></span>

      <span class="relative block border border-current bg-white px-8 py-3">Login</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { useLCABygAPI } from '@/stores/lca-byg-api'
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const api = useLCABygAPI()
</script>

<style scoped></style>
