import PostCard from 'components/PostCard'
import React from 'react'
import { getAllBlogPosts } from 'utils/blog'

const LandingPage = ({ blogPosts }) => {
  return (
    <>
      <div className="w-2/5 min-h-screen m-auto p-4">
        {blogPosts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
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
