import { AiFillGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { Button, Icon, Text } from '@chakra-ui/react'

import { useAuth } from 'contexts/AuthContext'

import { Navigate } from 'react-router-dom'

export const Login = () => {
   const [t] = useTranslation('default')

   const { LoginGit, signed } = useAuth()

   const handleLoginGit = async () => {
      LoginGit()
   }

   if (!signed) {
      return (
         <Button mt={2} onClick={() => handleLoginGit()}>
            <Icon as={AiFillGithub} fontSize={25} m={1} />
            <Text>{t('signInWithGitHub')}</Text>
         </Button>
      )
   } else {
      return <Navigate to="/home" />
   }
}
