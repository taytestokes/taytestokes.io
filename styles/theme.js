import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  body:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
}

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.900', 'whiteAlpha.900')(props),
      bg: mode('white', 'black')(props)
    }
  })
}

const colors = {
  dark: {
    50: '#000000',
    100: '#0a0a0a',
    200: '#141414',
    300: '#1f1f1f',
    400: '#292929'
  }
}

export default extendTheme({
  config,
  fonts,
  styles,
  colors
})
