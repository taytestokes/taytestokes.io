import React from 'react'

import { getAllBlogPosts } from 'utils/blog'

const BlogPage = ({ blogPosts }) => {
  return <></>
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
