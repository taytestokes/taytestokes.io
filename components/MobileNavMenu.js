import React, { useRef } from 'react'

import {
  Text,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { FiZap } from 'react-icons/fi'
import { MoonIcon, HamburgerIcon } from '@chakra-ui/icons'
import { LogoIcon } from 'public/icons/custom'

import NavLink from 'components/NavLink'

const MobileNavMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const drawerContentBackground = useColorModeValue('white', 'black')

  return (
    <Box flex="1 0 auto" justifyContent="flex-end" display={['flex', 'none']}>
      <IconButton
        variant="ghost"
        icon={
          colorMode === 'light' ? <MoonIcon /> : <FiZap fill="currentColor" />
        }
        onClick={toggleColorMode}
        mr={4}
      />
      <IconButton icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay>
          <DrawerContent bg={drawerContentBackground}>
            <DrawerCloseButton />
            <DrawerHeader display="flex" alignItems="center" py={8}>
              <LogoIcon boxSize={50} borderRadius={3} />
              <Text fontWeight="bold" fontSize="lg">
                taytestokes.io
              </Text>
            </DrawerHeader>
            <DrawerBody display="flex" flexDirection="column">
              <NavLink path="/blog">Blog</NavLink>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default MobileNavMenu
