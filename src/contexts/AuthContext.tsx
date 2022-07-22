import { createContext, useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

import { Spinner } from 'components/atoms/Spinner'

import { auth, provider } from 'services/firebase/firebaseConfig'

import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'

type Props = {
   children: React.ReactNode
}

type ContextProps = {
   LoginGit: () => void
   handleSignOut: () => void
   signed: boolean
   user: any
}

const authContext = createContext({} as ContextProps)

export const AuthProvider = ({ children }: Props) => {
   const [user, setUser] = useState<unknown>()

   const [loading, setLoading] = useState(true)

   const toast = useToast()

   const LoginGit = () => {
      signInWithPopup(auth, provider)
         .then((response) => {
            const credential = GithubAuthProvider.credentialFromResult(response)
            const token = credential?.accessToken
            const user = response.user

            setUser(user)

            sessionStorage.setItem('@AuthFirebase:token', JSON.stringify(token))
            sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))

            toast({
               title: `${user.displayName}`,
               description: `${user.email}`,
               variant: 'left-accent',
               position: 'top',
               status: 'success',
               duration: 4000,
               isClosable: true
            })
         })
         .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.email
            const credential = GithubAuthProvider.credentialFromError(error)

            toast({
               title: `${errorMessage}`,
               description: `${errorCode}`,
               variant: 'left-accent',
               position: 'top',
               status: 'success',
               duration: 4000,
               isClosable: true
            })
         })
         .finally(() => {
            setLoading(false)
         })
   }

   const handleSignOut = async () => {
      sessionStorage.clear()
      setUser(null)
      return <Navigate to="/" />
   }

   useEffect(() => {
      const loadStorageData = () => {
         const storageUser = sessionStorage.getItem('@AuthFirebase:user')
         const storageToken = sessionStorage.getItem('@AuthFirebase:token')

         if (storageToken && storageUser) {
            setUser(storageUser)
         }
      }

      loadStorageData()
   })

   loading && <Spinner />

   return (
      <authContext.Provider
         value={{ LoginGit, handleSignOut, signed: !!user, user }}
      >
         {children}
      </authContext.Provider>
   )
}

export function useAuth() {
   const context = useContext(authContext)

   return context
}
