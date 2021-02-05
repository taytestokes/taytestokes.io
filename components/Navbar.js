import React, { useState, useRef } from 'react'
import NextLink from 'next/link'

import {
  Box,
  Text,
  Link,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
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

const NavLink = ({ children, path }) => (
  <NextLink href={path}>
    <Button variant="ghost" mr={4}>
      <Link
        _hover={{
          textDecoration: 'none'
        }}
        _focus={{
          outline: 'red'
        }}
      >
        {children}
      </Link>
    </Button>
  </NextLink>
)

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const mobileMenuBottomGradientBorder = useColorModeValue(
    'linear(to-l, gray.200, gray.200)',
    'linear(to-l, #7928CA, #FF0080)'
  )
  const drawerContentBackground = useColorModeValue('white', 'black')

  const btnRef = useRef()

  const [showMobileNavMenu, setShowMobileNavMeny] = useState(false)

  return (
    <Box
      h="100px"
      w="full"
      maxW="1200px"
      margin="0 auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={4}
    >
      <LogoIcon boxSize={50} borderRadius={3} />

      {/* Desktop Nav Menu */}
      <Box flex="1 0 auto" display={['none', 'flex']} justifyContent="flex-end">
        <NavLink path="/">Home</NavLink>
        <NavLink path="/">About</NavLink>
        <NavLink path="/">Blog</NavLink>
        <IconButton
          variant="ghost"
          icon={
            colorMode === 'light' ? <MoonIcon /> : <FiZap fill="currentColor" />
          }
          onClick={toggleColorMode}
        />
      </Box>

      {/* Mobile Nav Menu */}
      <Box display={['flex', 'none']}>
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
              <DrawerHeader>
                <LogoIcon boxSize={50} borderRadius={3} />
              </DrawerHeader>
              <DrawerBody display="flex" flexDirection="column">
                <NavLink path="/" onClick={onClose}>
                  Home
                </NavLink>
                <NavLink path="/">About</NavLink>
                <NavLink path="/">Blog</NavLink>
              </DrawerBody>
              <Box
                w="full"
                h="10px"
                bgGradient={mobileMenuBottomGradientBorder}
              />
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar
