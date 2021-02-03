import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { getAllBlogPosts } from 'utils/blog'

const LandingPage = ({ blogPosts }) => {
  return (
    <Box w="100vw" h="100vh">
      {/* Linear Gradient Border At Top */}
      <Box w="full" h="10px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      {/* Content Container That Creates The Layout */}
      <Box
        w="full"
        minHeight="calc(100vh - 60px)"
        maxWidth="700px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        py={12}
        px={4}
      >
        <Text fontSize="5xl" fontWeight="bold">
          Tayte Stokes
        </Text>
        <Text color="gray.600" mt={4} fontWeight="medium">
          I'm a caffiene addicted Software Engineer. I'm currently working as a
          Frontend Engineer at MX, a Fintech Startup headquartered in the
          Silicon Slopes.
        </Text>
        <Box>
          {blogPosts.map((post) => {
            return (
              <Box
                key={post.title}
                display="flex"
                flexDirection="column"
                mt={4}
              >
                <Text fontSize="2xl" fontWeight="semibold">
                  {post.title}
                </Text>
                <Text color="gray.600">{post.date}</Text>
                <Text color="gray.600">{post.excerpt}</Text>
              </Box>
            )
          })}
        </Box>
      </Box>
      {/* Footer */}
      {/* <Box h="50px">OUI</Box> */}
    </Box>
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
