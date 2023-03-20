<template>
  <div class="flex flex-col justify-center py-10 space-y-6 w-full">
    <FileInput class="w-1/2" />
    <FileList class="flex-1 w-full" />
  </div>
</template>

<script setup lang="ts">
const authToken = useAuthToken()
const router = useRouter()

if (!authToken.value) { router.push('auth/login') }
</script>
