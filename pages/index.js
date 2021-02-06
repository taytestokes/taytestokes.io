import React from 'react'
import { FiMail } from 'react-icons/fi'
import { Box, Text, Link, Button, useColorModeValue } from '@chakra-ui/react'

import PageLayout from 'layouts/PageLayout'

const LandingPage = () => {
  const contactButtonGradient = useColorModeValue(
    'linear(to-l, gray.100, gray.100)',
    'linear(to-l, #7928CA,#FF0080)'
  )
  const textColor = useColorModeValue('gray.500', 'whiteAlpha.900')

  return (
    <PageLayout>
      <Text fontWeight="bold" fontSize={['4xl', '6xl']} mt={12}>
        Hey, I'm Tayte
      </Text>
      <Text
        mt={4}
        fontWeight="medium"
        color={textColor}
        fontSize={['md', 'xl']}
      >
        I'm a Javascript Developer focused in creating web applications using
        React and Node. Currently, I'm working as a Frontend Engineer for a
        FinTech company based in the Silicon Slopes called MX.
      </Text>
      <Button
        w="200px"
        mt={8}
        leftIcon={<FiMail />}
        bgGradient={contactButtonGradient}
        _hover={{
          bgGradient: contactButtonGradient
        }}
        _active={{
          bgGradient: contactButtonGradient
        }}
      >
        <Link
          href="mailto:taytestokes9328@gmail.com"
          _hover={{
            textDecoration: 'none'
          }}
        >
          Shoot me an email
        </Link>
      </Button>
    </PageLayout>
  )
}

export default LandingPage
