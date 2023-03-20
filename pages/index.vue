<template>
  <div class="flex  justify-center py-10  w-full">
    <FileInput class="w-1/2" />
  </div>
</template>

<script setup lang="ts">
const authToken = useAuthToken()
const router = useRouter()

if (!authToken.value) { router.push('auth/login') }
</script>
