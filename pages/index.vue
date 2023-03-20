<template>
  <div class="flex w-full justify-center">
    <div class="flex flex-col justify-center py-10 px-6 space-y-6 w-1/2">
      <FileInput class="w-full " />
      <FileList class=" w-full " />
      <div class="w-full flex flex-row-reverse  max-w-md">
        <TheButton text="Submit" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authToken = useAuthToken()
const router = useRouter()

if (!authToken.value) { router.push('auth/login') }
</script>
