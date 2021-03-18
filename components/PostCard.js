import React from 'react'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="mt-4 text-gray-600 italic">{post.excerpt}</p>
      <p className="mt-4 text-blue-500">
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </p>
    </div>
  )
}

export default PostCard
