import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'styles/theme'
import SEO from 'next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
