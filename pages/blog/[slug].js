import React from 'react'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import { Box, Text, useColorModeValue } from '@chakra-ui/react'

import PageLayout from 'layouts/PageLayout'

import { getBlogPostContentBySlug, getBlogPostSlugs } from 'utils/blog'

import MDXComponents from 'components/MDXComponents'

const BlogPostPage = ({ source, postData }) => {
  const content = hydrate(source, {
    components: MDXComponents
  })

  return (
    <PageLayout>
      <Box as="article">
        <Text
          fontSize={['2xl', '4xl']}
          fontWeight="bold"
          bgGradient={useColorModeValue(
            'linear(to-l, gray.900, gray.900)',
            'linear(to-l, #7928CA, #FF0080)'
          )}
          bgClip="text"
        >
          {postData.title}
        </Text>
        <Box mt={8} fontSize="lg" lineHeight={2}>
          {content}
        </Box>
      </Box>
    </PageLayout>
  )
}

export async function getStaticProps(context) {
  const postContent = getBlogPostContentBySlug(context.params.slug)
  const { data, content } = matter(postContent)
  const mdxSource = await renderToString(content, {
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      postData: data
    }
  }
}

export async function getStaticPaths() {
  const blogPostSlugs = getBlogPostSlugs()
  const paths = blogPostSlugs.map((slug) => {
    return {
      params: {
        slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default BlogPostPage
