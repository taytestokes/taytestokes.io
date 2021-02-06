import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import PageLayout from 'layouts/PageLayout'
import { getAllBlogPosts } from 'utils/blog'

import BlogPostCard from 'components/BlogPostCard'

const BlogPage = ({ blogPosts }) => {
  const textColor = useColorModeValue('gray.500', 'whiteAlpha.900')

  return (
    <PageLayout>
      <Text fontWeight="bold" fontSize={['4xl', '6xl']} mt={12}>
        Blog
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
