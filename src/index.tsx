import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { messagesGlobal } from 'translate'

import { AuthProvider } from 'contexts/AuthContext'

i18n.use(LanguageDetector).init({
   debug: true,
   supportedLngs: ['pt', 'es', 'en'],
   fallbackLng: 'en',
   resources: messagesGlobal,
   detection: {
      order: ['localStorage', 'cookie']
   },
   interpolation: {
      escapeValue: false
   }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <AuthProvider>
         <ChakraProvider theme={theme}>
            <ThemeProvider theme={theme}>
               <I18nextProvider i18n={i18n}>
                  <ColorModeScript
                     initialColorMode={theme.config.initialColorMode}
                  />
                  <App />
               </I18nextProvider>
            </ThemeProvider>
         </ChakraProvider>
      </AuthProvider>
   </React.StrictMode>
)
