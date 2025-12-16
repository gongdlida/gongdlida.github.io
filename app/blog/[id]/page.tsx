import type { Metadata } from 'next'
import { use, type ComponentType } from 'react'
import { notFound } from 'next/navigation'

import Callback from '@/mdx/markdown/Callback.md'
import Clousre from '@/mdx/markdown/Clousre.md'
import DataType from '@/mdx/markdown/DataType.md'
import Route from '@/mdx/markdown/Route.md'
import Controlled from '@/mdx/markdown/controlled-uncontrolled-components.md'

type PostEntry = {
  title: string
  Component: ComponentType
}
type BlogPostProps = {
  params: Promise<{
    id: string
  }>
}

const posts: Record<string, PostEntry> = {
  route: {
    title: 'React CSR 초기 로딩부터 라우팅까지',
    Component: Route
  },
  'controlled-uncontrolled-components': {
    title: 'controlled와 uncontrolled 컴포넌트',
    Component: Controlled
  },
  closure: {
    title: '[코어 자바스크립트] 클로저',
    Component: Clousre
  },
  'data-type': {
    title: '[코어 자바스크립트] 데이터 타입',
    Component: DataType
  }
}

export const dynamicParams = false

export const generateStaticParams = () =>
  Object.keys(posts).map((id) => ({
    id
  }))

export const generateMetadata = async ({
  params
}: BlogPostProps): Promise<Metadata> => {
  const { id } = await params

  const post = posts[id]

  if (!post) {
    return { title: '글을 찾을 수 없습니다' }
  }

  return { title: post.title }
}

const BlogPostPage = ({ params }: BlogPostProps) => {
  const { id } = use(params)
  const post = posts[id]
  if (!post) {
    notFound()
  }

  const Content = post.Component

  return (
    <div className='mx-auto max-w-3xl px-6 py-12'>
      <h1 className='mb-6 text-3xl font-semibold tracking-tight'>
        {post.title}
      </h1>
      <article className='prose prose-zinc max-w-none'>
        <Content />
      </article>
    </div>
  )
}

export default BlogPostPage
