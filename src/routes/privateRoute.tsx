import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from 'contexts/AuthContext'

export const ProtectedRoutes = () => {
   const { signed } = useAuth()

   return signed ? <Outlet /> : <Navigate to="/" />
}
