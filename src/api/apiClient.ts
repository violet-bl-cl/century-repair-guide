import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://repair-guide-backend.vercel.app',
})
