import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

import Navbar from 'components/Navbar'

const PageLayout = ({ children }) => {
  const pageTopBorderGradient = useColorModeValue(
    'linear(to-l, gray.200, gray.200)',
    'linear(to-l, #7928CA, #FF0080)'
  )

  return (
    <>
      <Box w="full" h="10px" bgGradient={pageTopBorderGradient} />
      <Navbar />
      <Box
        w="full"
        minH="calc(100vh - 110px)"
        maxWidth="900px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        px={4}
      >
        {children}
      </Box>
    </>
  )
}

export default PageLayout
