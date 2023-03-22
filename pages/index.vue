<template>
  <div class="flex w-full justify-center">
    <div class="flex flex-col justify-center py-10 px-6 space-y-6 w-1/2">
      <FileInput class="w-full " />
      <FileList class=" w-full " />
      <div class="w-full flex flex-row-reverse">
        <TheButton text="Submit" @click="handleSubmit" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authToken = useAuthToken()
const projectData = useProjectData()
const router = useRouter()

if (!authToken.value) { router.push('auth/login') }

async function handleSubmit () {
  if (!authToken.value || projectData.value.length === 0) { return }
  let inputData: Object[] = []
  projectData.value.forEach((d) => {
    inputData = [...inputData, ...d.data]
  })
  const blob = btoa(JSON.stringify(inputData))
  const decoded = JSON.parse(atob(blob))

  console.log(blob)

  const { data } = await useFetch('https://api1.lcabyg.dk/v2/jobs', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken.value}`
    },
    body: {
      priority: 0,
      job_target: 'lcabyg5+br23',
      job_target_min_ver: '',
      job_target_max_ver: '',
      job_arguments: '',
      extra_input: '',
      input_blob: blob
    }
  })

  console.log(data)
}
</script>
