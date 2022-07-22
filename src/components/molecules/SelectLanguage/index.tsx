import { useEffect, useState } from 'react'
import i18n from 'i18next'

import * as S from './styles'

export type SelectLanguageProps = {
   color?: 'white' | 'black'
}

export const SelectLanguage = ({ color = 'white' }: SelectLanguageProps) => {
   const [defaultValue, setDefaultValuesInsurance] = useState('')

   const selectedLanguageDefault = (language: string) => {
      if (language === 'en') {
         localStorage.setItem('i18nextLng', 'en')
         i18n.changeLanguage('en')
      } else if (language === 'es') {
         localStorage.setItem('i18nextLng', 'es')
         i18n.changeLanguage('es')
      } else if (language === 'pt') {
         localStorage.setItem('i18nextLng', 'pt')
         i18n.changeLanguage('pt')
      }

      setDefaultValuesInsurance(language)
   }

   useEffect(() => {
      const lang = localStorage.getItem('i18nextLng')

      if (lang) {
         setDefaultValuesInsurance(lang)
      }
   }, [])

   return (
      <S.Wrapper
         onChange={({ target: { value } }) => selectedLanguageDefault(value)}
         value={defaultValue}
         color={color}
      >
         <option value="pt">PT-BR</option>
         <option value="en">En</option>
         <option value="es">Es</option>
      </S.Wrapper>
   )
}
