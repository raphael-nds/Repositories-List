import { api } from './api'

export type RepositoriesData = {
   name: string
   created_at: string
   updated_at: string
   html_url: string
}

export const useServiceRepositories = () => {
   const getRepositories = async () => {
      const response = await api.get(`users/raphael-nds/repos`)

      return response.data
   }

   const getRepositoriesAuthenticated = async () => {
      const response = await api.get(`user/repos`)

      return response.data
   }

   return { getRepositories, getRepositoriesAuthenticated }
}
