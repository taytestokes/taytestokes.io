import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import PageLayout from 'layouts/PageLayout'
import { getAllBlogPosts } from 'utils/blog'

import BlogPostCard from 'components/BlogPostCard'

const BlogPage = ({ blogPosts }) => {
  const textColor = useColorModeValue('gray.500', 'whiteAlpha.900')

  return (
    <PageLayout>
      <Text fontWeight="bold" fontSize={['4xl', '6xl']} mt={32}>
        Blog
      </Text>
      <Text
        mt={4}
        fontWeight="medium"
        color={textColor}
        fontSize={['md', 'xl']}
      >
        Welcome to my blog - this is where I plan to document my learnings to
        help further my undertsanding and share what I learn.
      </Text>
      <Box>
        {blogPosts.map((post) => (
          <BlogPostCard post={post} />
        ))}
      </Box>
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

export default BlogPage
