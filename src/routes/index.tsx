import { Routes, Route } from 'react-router-dom'

import { ProtectedRoutes } from './privateRoute'

import { PageAutenticated } from 'pages/Authenticated'
import { PageNotAutenticated } from 'pages/NotAuthenticated'

import { NotFound } from 'components/atoms/NotFound'

export const RoutesApp = () => {
   return (
      <Routes>
         <Route path="/" element={<PageNotAutenticated />} />

         <Route path="*" element={<NotFound />} />
         <Route path="/home" element={<ProtectedRoutes />}>
            <Route path="/home" element={<PageAutenticated />} />
         </Route>
      </Routes>
   )
}
