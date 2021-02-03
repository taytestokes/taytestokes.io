import React from 'react'
import Image from 'next/image'

import { Box, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Box w="100vw" h="100vh">
      {/* Linear Gradient Border At Top */}
      <Box w="full" h="10px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      {/* Content Container That Creates The Layout */}
      <Box
        w="full"
        minHeight="calc(100vh - 60px)"
        maxWidth="700px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        py={12}
        px={4}
      >
        <Text fontSize={['3xl', '5xl']} fontWeight="bold">
          Tayte Stokes
        </Text>
        <Text color="gray.600" mt={4} fontWeight="medium">
          I'm a caffiene addicted Software Engineer. I'm currently working as a
          Frontend Engineer at MX, a Fintech Startup headquartered in the
          Silicon Slopes.
        </Text>
      </Box>
      {/* Footer */}
      {/* <Box h="50px">OUI</Box> */}
    </Box>
  )
}

export default index
