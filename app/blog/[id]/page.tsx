import { readdir } from 'node:fs/promises'
import path from 'node:path'

const Blog = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const { default: Post } = await import(`@/contents/${id}.mdx`)

  return <Post />
}

export const generateStaticParams = async (): Promise<
  Array<{ id: string }>
> => {
  const contentsDir = path.join(process.cwd(), 'contents')
  const files = await readdir(contentsDir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ id: file.replace(/\.mdx$/, '') }))
}

export default Blog
export const dynamicParams = false
