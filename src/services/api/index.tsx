import axios from 'axios'

export const api = axios.create({
   baseURL: 'https://api.github.com/'
})

api.interceptors.request.use(async (req) => {
   const tokenStorage = sessionStorage.getItem('@AuthFirebase:token')
   const tokenParse = JSON.parse(tokenStorage!)

   if (tokenParse) {
      req.headers = {
         Authorization: `Bearer ${tokenParse}`
      }
   }

   return req
})
