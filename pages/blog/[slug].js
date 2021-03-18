import React from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import { getBlogPostContentBySlug, getBlogPostSlugs } from 'utils/blog'

import MDXComponents from 'components/MDXComponents'

const BlogPostPage = ({ source, postData }) => {
  const content = hydrate(source, {
    components: MDXComponents
  })

  return (
    <div className="lg:w-2/5 min-h-screen m-auto p-4">
      <Head>
        <title>Tayte Stokes | {postData.title}</title>
      </Head>

      <h1 className="text-2xl font-bold">{postData.title}</h1>
      <article className="mt-4 text-gray-600">{content}</article>
    </div>
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

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export default BlogPostPage
