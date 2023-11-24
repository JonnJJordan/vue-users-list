import { useFetch } from '../composables/useFetch'
import { config } from '../config'

export const getUsers = async () => {
  return await useFetch(`${config.BASE_URL}users`)
}

export const getUser = async (id) => {
  return await useFetch(`${config.BASE_URL}users/${id}`)
}
