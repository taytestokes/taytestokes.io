import React from 'react'
import Head from 'next/head'
import PostCard from 'components/PostCard'
import { getAllBlogPosts } from 'utils/blog'

const LandingPage = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>Tayte Stokes | Home</title>
      </Head>
      <div className="lg:w-2/5 min-h-screen m-auto p-4">
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
