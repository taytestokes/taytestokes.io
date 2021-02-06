import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'

import theme from 'styles/theme'
import SEO from 'next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
