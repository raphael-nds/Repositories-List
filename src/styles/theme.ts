import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
   initialColorMode: 'dark',
   useSystemColorMode: false
}

export const colors = {
   main: {
      blue: '#1D69E5',
      darkblue: '#0E2E59',
      grey: 'rgba(255, 255, 255, 0.18)',
      shadow: 'rgba(0, 0, 0, 0.37)',
      lightGrey: '#EEEEEE',
      white: '#ffffff',
      lightBlue: '#F2F7FF',
      black: 'rgba(255, 255, 255, 0)',
      blackOpacity: 'rgba(255, 255, 255, 0.1)',
      main: '#0B2445'
   },
   alerts: {
      red: '#FF6B6B',
      lightRed: '#FFE9E7',
      yellow: '#FECA57',
      lightYellow: '#FFFAE4',
      green: '#1DD1A1',
      lightGreen: '#DEFFF6'
   },
   personalization: {
      lightGreen: '#B8E994',
      green: '#6DC981',
      purple: '#706FD3',
      cyan: '#6A89CC',
      lightBlue: '#82CCDD',
      yellow: '#FAD390',
      orange: '#FF7C32',
      red: '#E55039'
   }
}

export const family = {
   default: "'Roboto', sans-serif",
   secondary: "'Montserrat', sans-serif"
}

export const size = {
   xsmall: '0.8rem',
   small: '1.6rem',
   medium: '2.4rem',
   large: '3.2rem',
   xlarge: '4.0rem',
   xxlarge: '4.8rem',
   huge: '5.6rem',
   xhuge: '6.4rem',
   auto: 'auto'
}

export const radius = {
   none: '0',
   sm: '0.125rem',
   base: '0.25rem',
   md: '0.375rem',
   lg: '0.5rem',
   xl: '0.75rem',
   '2xl': '1rem',
   '3xl': '1.5rem',
   full: '9999px'
}

export const theme = extendTheme({
   config,

   styles: {
      global: {
         'html, body': {
            fontFamily: family.default
         }
      }
   }
})
