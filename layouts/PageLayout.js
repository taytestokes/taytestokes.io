import React from 'react'
import {
  Box,
  Text,
  Link,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import Navbar from 'components/Navbar'

const PageLayout = ({ children }) => {
  const pageTopBorderGradient = useColorModeValue(
    'linear(to-l, gray.200, gray.200)',
    'linear(to-l, #7928CA, #FF0080)'
  )

  return (
    <>
      {/* Linear Gradient Border At Top */}
      <Box w="full" h="10px" bgGradient={pageTopBorderGradient} />

      {/* Navbar */}
      <Navbar />
      {/* Content Container That Creates The Layout */}
      <Box
        w="full"
        minH="calc(100vh - 110px)"
        maxWidth="1000px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        px={4}
      >
        {children}
      </Box>

      {/* Footer */}
      <Box></Box>
    </>
  )
}

export default PageLayout
