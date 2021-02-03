import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogPostsDirectory = path.join(process.cwd(), 'data', 'blog')

export const getBlogPostSlugs = () => {
  return fs.readdirSync(blogPostsDirectory).map((file) => {
    return file.replace('.mdx', '')
  })
}

export const getAllBlogPosts = () => {
  const blogPostFiles = fs.readdirSync(blogPostsDirectory)

  return blogPostFiles.map((file) => {
    const slug = file.replace('.mdx', '')
    const fileContents = fs.readFileSync(
      path.join(blogPostsDirectory, file),
      'utf8'
    )
    const { data } = matter(fileContents)

    return {
      slug,
      ...data
    }
  })
}
