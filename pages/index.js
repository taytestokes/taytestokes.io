import React from 'react'
import NextLink from 'next/link'

import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react'

import PageLayout from 'layouts/PageLayout'

import { getAllBlogPosts } from 'utils/blog'

const LandingPage = ({ blogPosts }) => {
  const blogTitleGradient = useColorModeValue(
    'linear(to-l, gray.900, gray.900)',
    'linear(to-l, #7928CA,#FF0080)'
  )

  const blogPostBackgroundColor = useColorModeValue('gray.100', '#121212')

  return (
    <PageLayout>
      {/* <Text
        fontWeight="bold"
        fontSize="5xl"
        bgGradient={blogTitleGradient}
        bgClip="text"
      >
        Tayte Stokes
      </Text>
      <Text>Welcome to my personal space of the internet. </Text>

      <Text
        fontWeight="bold"
        fontSize="2xl"
        bgGradient={blogTitleGradient}
        bgClip="text"
      >
        Blog Posts
      </Text> */}
      {/* {blogPosts.map((post) => {
        return (
          <Box
            key={post.title}
            display="flex"
            flexDirection="column"
            mt={4}
            p={4}
            border="1px"
            borderColor="gray.200"
            bg={blogPostBackgroundColor}
            borderRadius={3}
          >
            <NextLink href={`/blog/${post.slug}`}>
              <Link _hover={{ textDecoration: 'none' }}>
                <Text fontSize="2xl" fontWeight="semibold">
                  {post.title}
                </Text>
              </Link>
            </NextLink>
            <Text>{post.date}</Text>
            <Text>{post.excerpt}</Text>
          </Box>
        )
      })} */}
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogPosts = getAllBlogPosts()

  return {
    props: {
      blogPosts
    }
  }
}

export default LandingPage
