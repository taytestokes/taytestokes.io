import React from 'react'
import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { FiZap } from 'react-icons/fi'

import NavLink from 'components/NavLink'

const DesktopNavMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box flex="1 0 auto" display={['none', 'flex']} justifyContent="flex-end">
      <NavLink path="/blog">Blog</NavLink>
      <IconButton
        variant="ghost"
        icon={
          colorMode === 'light' ? <MoonIcon /> : <FiZap fill="currentColor" />
        }
        onClick={toggleColorMode}
      />
    </Box>
  )
}

export default DesktopNavMenu
