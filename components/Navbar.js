import React from 'react'
import NextLink from 'next/link'

import { Text, Box, Link } from '@chakra-ui/react'
import { LogoIcon } from 'public/icons/custom'

import DesktopNavMenu from 'components/DesktopNavMenu'
import MobileNavMenu from 'components/MobileNavMenu'

const Navbar = () => {
  return (
    <Box
      h="100px"
      maxWidth="1200px"
      margin="0 auto"
      display="flex"
      alignItems="center"
      px={4}
    >
      <NextLink href="/">
        <Link
          display="flex"
          alignItems="center"
          _hover={{
            textDecoration: 'none'
          }}
        >
          <LogoIcon boxSize={45} borderRadius={3} />
          <Text fontWeight="bold" fontSize="lg">
            taytestokes.io
          </Text>
        </Link>
      </NextLink>
      <DesktopNavMenu />
      <MobileNavMenu />
    </Box>
  )
}

export default Navbar
