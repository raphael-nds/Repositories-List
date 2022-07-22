import { Button, useColorMode } from '@chakra-ui/react'

import { BsFillSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

import { SelectLanguage } from '../SelectLanguage'

import { radius, size } from 'styles/theme'
import * as S from './styles'
import { Logo } from 'components/atoms/Logo'

export const Header = () => {
   const { colorMode, toggleColorMode } = useColorMode()

   return (
      <S.Wrapper>
         <Logo />

         <S.ContainerRight>
            <Button
               borderRadius={radius.full}
               margin={size.small}
               p={size.xsmall}
               onClick={toggleColorMode}
            >
               {colorMode === 'dark' ? (
                  <BsFillSunFill color="yellow" />
               ) : (
                  <MdDarkMode color="black" />
               )}
            </Button>

            <SelectLanguage />
         </S.ContainerRight>
      </S.Wrapper>
   )
}
