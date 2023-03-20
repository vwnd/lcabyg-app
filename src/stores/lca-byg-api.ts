import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLCABygAPI = defineStore('LCABygAPI', () => {
  const token = ref('')

  async function login(username: string, password: string) {
    console.log(`Login: username=[${username}] | password=[${password}]`)

    await fetch('http://localhost:5173/foo')
    // await fetch('api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password })
    // })

    // axios.defaults.baseURL = 'api'
    // const { data } = await axios.post(
    //   '/login',
    //   {
    //     username,
    //     password
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // )
  }

  return { token, login }
})
