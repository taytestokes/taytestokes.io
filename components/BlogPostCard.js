import React from 'react'
import NextLink from 'next/link'

import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react'

const BlogPostCard = ({ post }) => {
  const titleTextColor = useColorModeValue(
    'linear(to-l, gray.900, gray.900)',
    'linear(to-l, #7928CA, #FF0080)'
  )
  const excerptTextColor = useColorModeValue('gray.500', 'whiteAlpha.900')

  return (
    <Box mt={8}>
      <NextLink href={`/blog/${post.slug}`}>
        <Link
          fontSize={['xl', '3xl']}
          fontWeight="bold"
          bgGradient={titleTextColor}
          bgClip="text"
          _hover={{
            textDecoration: 'none'
          }}
        >
          {post.title}
        </Link>
      </NextLink>
      <Text color={excerptTextColor}>{post.excerpt}</Text>
    </Box>
  )
}

export default BlogPostCard
