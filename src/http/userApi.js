import { $host } from "./instance";

export const login = async (username, password) => {
  try {
    const { data } = await $host.get("/users")

    const candidate = data.find(user => user.username === username)
    if (candidate && candidate.password === password) {
      return true
    } else {
      return false
    }
  } catch (error) {
    alert(respnse.data.error.message)
  }
}

export const register = async (username, password) => {
  try {
    $host.post('/users', { username, password })
  } catch (error) {
    alert(error.messages)
  }
}