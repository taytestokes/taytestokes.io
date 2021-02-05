import React from 'react'
import NextLink from 'next/link'

import { Link, Button } from '@chakra-ui/react'

const NavLink = ({ children, path }) => (
  <NextLink href={path}>
    <Button variant="ghost" mr={2}>
      <Link
        _hover={{
          textDecoration: 'none'
        }}
      >
        {children}
      </Link>
    </Button>
  </NextLink>
)

export default NavLink
